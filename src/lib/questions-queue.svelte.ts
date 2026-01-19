import { clone, random, range, shuffle } from "es-toolkit";
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
  items: Item[];

  #pinnedIdxs: SvelteSet<number>;
  #pinnedIdxsQueue: Queue;
  #unpinnedIdxs: SvelteSet<number>; // to improve the performance for generating unpinnedQueue
  #unpinnedIdxsQueue: Queue;

  constructor(items: Item[]) {
    this.items = items;

    this.#pinnedIdxs = new SvelteSet();
    this.#pinnedIdxsQueue = new Queue();
    this.#unpinnedIdxs = new SvelteSet(range(items.length));
    this.#unpinnedIdxsQueue = new Queue();
  }

  get numPinned() {
    return this.#pinnedIdxs.size;
  }
  get numUnpinned() {
    return this.#unpinnedIdxs.size;
  }

  get pinnedItems() {
    return [...this.#pinnedIdxs].map((idx) => ({ ...this.items[idx], idx }));
  }
  get unpinnedItems() {
    return [...this.#unpinnedIdxs].map((idx) => ({ ...this.items[idx], idx }));
  }

  isPinned(idx: number) {
    return this.#pinnedIdxs.has(idx);
  }
  pin(idx: number) {
    this.#pinnedIdxs.add(idx);
    this.#unpinnedIdxs.delete(idx);
  }
  unpin(idx: number) {
    this.#pinnedIdxs.delete(idx);
    this.#unpinnedIdxs.add(idx);
  }
  unpinAll() {
    this.#pinnedIdxs = new SvelteSet();
  }

  #idxToItem(idx: number | undefined) {
    return idx !== undefined ? clone({ ...this.items[idx], idx }) : undefined;
  }
  #resetPinnedQueue() {
    this.#pinnedIdxsQueue = new Queue(shuffle([...this.#pinnedIdxs]));
  }
  #resetUnpinnedQueue() {
    this.#unpinnedIdxsQueue = new Queue(shuffle([...this.#unpinnedIdxs]));
  }
  next({
    onlyPinned = false,
    onlyUnpinned = false,
  }: {
    onlyPinned?: boolean;
    onlyUnpinned?: boolean;
  } = {}) {
    if (!this.items.length) return undefined;

    if (onlyPinned && this.#pinnedIdxs.size) {
      while (true) {
        const idx = this.#pinnedIdxsQueue.pop();

        if (idx === undefined) {
          this.#resetPinnedQueue();
          return this.#idxToItem(this.#pinnedIdxsQueue.pop()!);
        }
        if (!this.#unpinnedIdxs.has(idx)) {
          return this.#idxToItem(idx);
        }
      }
    }

    if (onlyUnpinned && this.#unpinnedIdxs.size) {
      while (true) {
        const idx = this.#unpinnedIdxsQueue.pop();

        if (idx === undefined) {
          this.#resetUnpinnedQueue();
          return this.#idxToItem(this.#unpinnedIdxsQueue.pop()!);
        }
        if (!this.#pinnedIdxs.has(idx)) {
          return this.#idxToItem(idx);
        }
      }
    }

    if (!this.#pinnedIdxsQueue.size && !this.#unpinnedIdxsQueue.size) {
      this.#resetPinnedQueue();
      this.#resetUnpinnedQueue();
    }
    return this.#idxToItem(
      random(this.#pinnedIdxsQueue.size + this.#unpinnedIdxsQueue.size) < this.#pinnedIdxsQueue.size
        ? this.#pinnedIdxsQueue.pop()
        : this.#unpinnedIdxsQueue.pop(),
    );
  }
}
