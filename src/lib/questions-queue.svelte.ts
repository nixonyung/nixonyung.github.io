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

  get size() {
    return Math.max(0, this.items.length - this.idx);
  }

  get top(): number | undefined {
    return this.items[this.idx];
  }

  pop() {
    if (this.idx >= this.items.length) return undefined;

    const result = this.top;
    this.idx++;
    return result;
  }
}

type WithIndex<Item extends object> = Item & {
  idx: number;
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

  #idxToItem(idx: number): WithIndex<Item> {
    return { ...this.#items[idx], idx };
  }
  items({ onlyPinned = false, onlyUnpinned = false }: Settings = {}) {
    return this.#queue.items
      .filter((idx) =>
        onlyPinned && this.numPinned
          ? this.#pinnedIdxs.has(idx)
          : onlyUnpinned && this.numUnpinned
            ? !this.#pinnedIdxs.has(idx)
            : true,
      )
      .map((idx) => this.#idxToItem(idx));
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
  nextQuestion({ onlyPinned = false, onlyUnpinned = false }: Settings = {}) {
    if (!this.#items.length) return undefined;

    if (onlyPinned && this.numPinned) {
      while (true) {
        const idx = this.#queue.pop();

        if (idx === undefined) {
          // should run at most once after checking this.#items.length
          this.#resetQueue();
          continue;
        }
        if (this.#pinnedIdxs.has(idx)) {
          // should always terminate after checking this.numPinned
          return this.#idxToItem(idx);
        }
      }
    }

    if (onlyUnpinned && this.numUnpinned) {
      while (true) {
        const idx = this.#queue.pop();

        if (idx === undefined) {
          // should run at most once after checking this.#items.length
          this.#resetQueue();
          continue;
        }
        if (!this.#pinnedIdxs.has(idx)) {
          // should always terminate after checking this.numUnpinned
          return this.#idxToItem(idx);
        }
      }
    }

    if (!this.#queue.size) {
      this.#resetQueue();
    }
    return this.#idxToItem(this.#queue.pop()!);
  }

  genOptions(
    question: WithIndex<Item> | undefined,
    numOptions: number,
    { onlyPinned = false, onlyUnpinned = false }: Settings = {},
    filterFn?: (question: WithIndex<Item>, option: WithIndex<Item>) => boolean,
    keyFn?: (option: WithIndex<Item>) => string,
  ) {
    const options: WithIndex<Item>[] = [];

    if (question !== undefined && numOptions !== 0) {
      // problem: sample N elements (without replacement) with filtering
      //
      // constraint: need to efficiently find a new unique element if the current one is filtered out
      //
      // inferior solutions:
      //   - repeatedly call es-toolkit's `sampleSize` and filter until having enough elements
      //     - will incorrectly return elements WITH replacement
      //   - shuffle the whole array and pick until having N elements
      //     - costly in time when the array is large

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
        const option = this.#idxToItem(idx);

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
        sortBy(options, [(option) => keyFn(option)]);
      } else {
        options.splice(randomInt(options.length + 1), 0, question);
      }
    }

    return options;
  }
}
