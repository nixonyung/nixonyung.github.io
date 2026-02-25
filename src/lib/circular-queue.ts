import { range } from "es-toolkit";

export class CircularQueue<Item> {
  #size: number; // fixed-size
  #items: Item[];
  #i: number;

  constructor(size: number) {
    this.#size = size;
    this.#items = [];
    this.#i = 0;
  }

  push(item: Item): Item | undefined {
    const prevItem: Item | undefined = this.#items[this.#i];

    this.#items[this.#i] = item;
    this.#i = (this.#i + 1) % this.#size;

    return prevItem;
  }

  get top(): Item | undefined {
    return this.#items[this.#i];
  }

  items(): (Item | undefined)[] {
    return range(this.#size).map((i) => this.#items[(this.#i + i) % this.#size]);
  }
}
