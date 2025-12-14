import { range, shuffle } from "es-toolkit";

export class ShufflingCircularQueue<Item> {
  private items: Item[];
  private idxs: number[];
  private i: number;

  constructor(items: Item[]) {
    this.items = items;
    this.idxs = shuffle(range(items.length));
    this.i = 0;
  }

  reset() {
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
