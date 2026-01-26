import { clone, range, shuffle } from "es-toolkit";
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

export class QuestionsQueue<Item extends object> {
  #items: Item[];

  #pinnedIdxs: SvelteSet<number>;
  #queue: Queue;

  constructor(items: Item[]) {
    this.#items = items;

    this.#pinnedIdxs = new SvelteSet();
    this.#queue = new Queue();
  }

  get numPinned() {
    return this.#pinnedIdxs.size;
  }
  get numUnpinned() {
    return this.#items.length - this.#pinnedIdxs.size;
  }

  #idxToItem(idx: number): Item & { idx: number };
  #idxToItem(idx: number | undefined) {
    return idx !== undefined ? clone({ ...this.#items[idx], idx }) : undefined;
  }
  items({
    onlyPinned = false,
    onlyUnpinned = false,
  }: {
    onlyPinned?: boolean | undefined;
    onlyUnpinned?: boolean | undefined;
  } = {}) {
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
  next({
    onlyPinned = false,
    onlyUnpinned = false,
  }: {
    onlyPinned?: boolean | undefined;
    onlyUnpinned?: boolean | undefined;
  } = {}) {
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
}
