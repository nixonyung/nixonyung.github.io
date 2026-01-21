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
  #unpinnedIdxsQueue: Queue;

  constructor(items: Item[]) {
    this.items = items;

    this.#pinnedIdxs = new SvelteSet();
    this.#pinnedIdxsQueue = new Queue();
    this.#unpinnedIdxsQueue = new Queue();
  }

  get numPinned() {
    return this.#pinnedIdxs.size;
  }

  #idxToItem(idx: number): Item & { idx: number };
  #idxToItem(idx: number | undefined) {
    return idx !== undefined ? clone({ ...this.items[idx], idx }) : undefined;
  }
  get pinnedItems() {
    return [...this.#pinnedIdxs].map((idx) => this.#idxToItem(idx));
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

  #resetPinnedQueue() {
    this.#pinnedIdxsQueue = new Queue(shuffle([...this.#pinnedIdxs]));
  }
  #resetUnpinnedQueue() {
    this.#unpinnedIdxsQueue = new Queue(
      shuffle(range(this.items.length).filter((idx) => !this.#pinnedIdxs.has(idx))),
    );
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
        if (this.#pinnedIdxs.has(idx)) {
          return this.#idxToItem(idx);
        }
      }
    }

    if (onlyUnpinned && this.#pinnedIdxs.size < this.items.length) {
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
        ? this.#pinnedIdxsQueue.pop()!
        : this.#unpinnedIdxsQueue.pop()!,
    );
  }
}
