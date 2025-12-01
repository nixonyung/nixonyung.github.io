import { shuffle } from "es-toolkit";

export class ShufflingCircularQueue<Item> {
  private items: Item[];
  private idx: number;

  constructor(items: Item[]) {
    this.items = shuffle(items);
    this.idx = 0;
  }

  reset() {
    this.items = shuffle(this.items);
    this.idx = 0;
  }

  next(): Item | undefined {
    if (this.items.length === 0) return undefined;

    this.idx += 1;
    if (this.idx >= this.items.length) this.reset();

    return this.items[this.idx];
  }
}
