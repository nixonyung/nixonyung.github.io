import { randomInt, range, shuffle, sortBy } from "es-toolkit";
import { SvelteSet } from "svelte/reactivity";

// used in QuestionsQueue, only need to support numbers
class IdxsQueue {
  idxs: number[];
  i: number;

  constructor(idxs: number[]) {
    this.idxs = idxs;
    this.i = 0;
  }

  get isEmpty() {
    return this.i >= this.idxs.length;
  }

  push(item: number) {
    this.idxs.push(item);
  }

  get top(): number {
    return this.idxs[this.i];
  }

  pop() {
    if (this.i >= this.idxs.length) return undefined;

    const result = [this.top, this.i] as [number, number];
    this.i++;
    return result;
  }

  filter(predicate: (idx: number) => boolean) {
    const newIdxs = [];
    let newI = 0;
    for (const [i, idx] of this.idxs.entries()) {
      if (!predicate(idx)) continue;

      newIdxs.push(idx);
      if (i < this.i && newIdxs.length) newI++;
    }
    this.idxs = newIdxs;
    this.i = newI;
  }
}

type WithIndex<Item extends object> = Item & {
  idx: number;
};
type WithQueueIndex<Item extends object> = WithIndex<Item> & {
  queueIdx: number;
};
interface PinningSettings {
  onlyPinned: boolean;
  onlyUnpinned: boolean;
}

export class QuestionsQueue<Item extends object> {
  #items: Item[];
  #pinnedIdxs: SvelteSet<number>;
  #queue: IdxsQueue;

  constructor(items: Item[]) {
    this.#items = items;
    this.#pinnedIdxs = new SvelteSet();
    this.#queue = new IdxsQueue(shuffle(range(items.length)));
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
  items(): WithQueueIndex<Item>[] {
    return this.#queue.idxs.map((itemIdx, queueIdx) => ({
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

  #itemIdxIsValid(itemIdx: number, { onlyPinned, onlyUnpinned }: PinningSettings) {
    return (
      !(onlyPinned && !this.#pinnedIdxs.has(itemIdx)) &&
      !(onlyUnpinned && this.#pinnedIdxs.has(itemIdx))
    );
  }
  newQueue(settings: PinningSettings) {
    this.#queue = new IdxsQueue(
      shuffle(
        range(this.#items.length).filter((itemIdx) => this.#itemIdxIsValid(itemIdx, settings)),
      ),
    );
  }
  filter(settings: PinningSettings) {
    this.#queue.filter((itemIdx) => this.#itemIdxIsValid(itemIdx, settings));
  }
  #reset() {
    this.#queue = new IdxsQueue(shuffle(this.#queue.idxs));
  }

  nextQuestion(): WithQueueIndex<Item> | undefined {
    if (!this.#items.length) return undefined;

    let top = this.#queue.pop();
    if (top === undefined) {
      this.#reset();
      top = this.#queue.pop()!;
    }
    const [itemIdx, queueIdx] = top;
    return { ...this.#itemIdxToItem(itemIdx), queueIdx };
  }

  genOptions({
    question,
    numOptions,
    filterFn,
    keyFn,
  }: {
    question: WithIndex<Item> | undefined;
    numOptions: number;
    filterFn?: (question: WithIndex<Item>, option: WithIndex<Item>) => boolean;
    keyFn?: (option: WithIndex<Item>) => string;
  }) {
    if (question === undefined || numOptions === 0) return [];

    // problem: sample N elements (without replacement) with filtering
    //
    // constraint: need to efficiently find a new UNIQUE element if the current one is filtered out
    //
    // inferior solutions:
    //   - repeatedly call es-toolkit's `sampleSize` and filter until having enough elements
    //     - will incorrectly return elements WITH replacement
    //   - shuffle the whole array and pick until having N elements
    //     - shuffling the whole array has an unneccessary time cost when the array is large

    const options: WithIndex<Item>[] = [];
    const keys = new Set([keyFn?.(question) ?? ""]);

    // Fisher-Yates shuffle, from left-to-right
    // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
    const idxs = [...this.#queue.idxs];
    let i = 0;
    while (options.length < numOptions - 1 && i < idxs.length) {
      const j = randomInt(i, idxs.length);
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
      const idx = idxs[i];
      i++;

      if (idx === question.idx) continue;
      const option = this.#itemIdxToItem(idx);

      if (filterFn && !filterFn(question, option)) continue;

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
