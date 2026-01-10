import { range, shuffle } from "es-toolkit";

/**
 * circular queue that shuffle on initialization and when reaching the end
 */
export class QuestionQueue<Item> {
  private items: Item[];
  private idxs: number[];
  private i: number; // pointer in queue

  constructor(items: Item[]) {
    this.items = items;
    this.idxs = shuffle(range(items.length));
    this.i = 0;
  }

  private reset() {
    this.idxs = shuffle(this.idxs);
    this.i = 0;
  }

  next(): Item | undefined {
    if (this.idxs.length === 0) return undefined;

    this.i += 1;
    if (this.i >= this.idxs.length) this.reset();

    return this.items[this.idxs[this.i]];
  }
}
