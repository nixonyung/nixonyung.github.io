import { randomInt, range, shuffle, sortBy } from "es-toolkit";
import { SvelteSet } from "svelte/reactivity";

// used in QuestionsQueue, only need to support numbers
class Queue {
  items: number[];
  idx: number;

  constructor(items: number[] = []) {
    this.items = items;
    this.idx = 0;
  }

  get isEmpty() {
    return this.idx >= this.items.length;
  }

  get top(): number {
    return this.items[this.idx];
  }

  pop(): [number, number] | undefined {
    if (this.idx >= this.items.length) return undefined;

    const result = this.top;
    this.idx++;
    return [result, this.idx - 1];
  }
}

type WithIndex<Item extends object> = Item & {
  idx: number;
};
type WithQueueIndex<Item extends object> = WithIndex<Item> & {
  queueIdx: number;
};
interface Settings {
  onlyPinned?: boolean;
  onlyUnpinned?: boolean;
}

export class QuestionsQueue<Item extends object> {
  #items: Item[];
  #pinnedIdxs: SvelteSet<number>;
  #queue: Queue;

  constructor(items: Item[]) {
    this.#items = items;
    this.#pinnedIdxs = new SvelteSet();
    this.#queue = new Queue(shuffle(range(items.length)));
  }

  get numPinned() {
    return this.#pinnedIdxs.size;
  }
  get numUnpinned() {
    return this.#items.length - this.#pinnedIdxs.size;
  }

  #itemIdxToItem(itemIdx: number): WithIndex<Item> {
    return { ...this.#items[itemIdx], idx: itemIdx };
  }
  items({ onlyPinned = false, onlyUnpinned = false }: Settings = {}): WithQueueIndex<Item>[] {
    return this.#queue.items
      .filter((itemIdx) =>
        onlyPinned && this.numPinned
          ? this.#pinnedIdxs.has(itemIdx)
          : onlyUnpinned && this.numUnpinned
            ? !this.#pinnedIdxs.has(itemIdx)
            : true,
      )
      .map((itemIdx, queueIdx) => ({
        ...this.#itemIdxToItem(itemIdx),
        queueIdx,
      }));
  }

  isPinned(idx: number) {
    return this.#pinnedIdxs.has(idx);
  }
  pin(idx: number) {
    this.#pinnedIdxs.add(idx);
  }
  unpin(idx: number) {
    this.#pinnedIdxs.delete(idx);
  }
  unpinAll() {
    this.#pinnedIdxs = new SvelteSet();
  }

  #resetQueue() {
    this.#queue = new Queue(shuffle(range(this.#items.length)));
  }
  nextQuestion({ onlyPinned = false, onlyUnpinned = false }: Settings = {}):
    | WithQueueIndex<Item>
    | undefined {
    if (!this.#items.length) return undefined;

    // settings are valid only if a pinned/unpinned element exists
    onlyPinned &&= !!this.numPinned;
    onlyUnpinned &&= !!this.numUnpinned;

    if (onlyPinned || onlyUnpinned) {
      while (true) {
        const top = this.#queue.pop();
        if (top === undefined) {
          // should run at most once
          this.#resetQueue();
          continue;
        }

        const [itemIdx, queueIdx] = top;
        if (
          (onlyPinned && this.#pinnedIdxs.has(itemIdx)) ||
          (onlyUnpinned && !this.#pinnedIdxs.has(itemIdx))
        )
          return { ...this.#itemIdxToItem(itemIdx), queueIdx };
      }
    } else {
      if (this.#queue.isEmpty) this.#resetQueue();
      const [itemIdx, queueIdx] = this.#queue.pop()!;
      return { ...this.#itemIdxToItem(itemIdx), queueIdx };
    }
  }

  genOptions(
    question: WithIndex<Item> | undefined,
    numOptions: number,
    { onlyPinned = false, onlyUnpinned = false }: Settings = {},
    filterFn?: (question: WithIndex<Item>, option: WithIndex<Item>) => boolean,
    keyFn?: (option: WithIndex<Item>) => string,
  ) {
    if (question === undefined || numOptions === 0) return [];

    // problem: sample N elements (without replacement) with filtering
    //
    // constraint: need to efficiently find a new unique element if the current one is filtered out
    //
    // inferior solutions:
    //   - repeatedly call es-toolkit's `sampleSize` and filter until having enough elements
    //     - will incorrectly return elements WITH replacement
    //   - shuffle the whole array and pick until having N elements
    //     - costly in time when the array is large
    const options: WithIndex<Item>[] = [];
    const keys = new Set([keyFn?.(question) ?? ""]);

    // Fisher-Yates shuffle, from left-to-right, running on indices to avoid copying
    // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
    const indices = range(this.#items.length);
    let i = 0;
    while (options.length < numOptions - 1 && i < indices.length) {
      const j = randomInt(i, indices.length);
      [indices[i], indices[j]] = [indices[j], indices[i]];
      const idx = indices[i];
      i++;

      if (idx === question.idx) continue;
      const option = this.#itemIdxToItem(idx);

      if (filterFn && !filterFn(question, option)) continue;
      if (onlyPinned && this.numPinned && !this.isPinned(idx)) continue;
      if (onlyUnpinned && this.numUnpinned && this.isPinned(idx)) continue;

      if (keyFn) {
        const key = keyFn(option);
        if (keys.has(key)) continue;

        options.push(option);
        keys.add(key);
      } else {
        options.push(option);
      }
    }

    // add the real answer
    if (keyFn) {
      options.push(question);
      return sortBy(options, [(option) => keyFn(option)]);
    } else {
      options.splice(randomInt(options.length + 1), 0, question);
      return options;
    }
  }
}
