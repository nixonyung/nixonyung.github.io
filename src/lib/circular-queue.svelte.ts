import { range } from "es-toolkit";

export class CircularQueue<Item> {
  #size: number; // fixed-size
  #items: Item[];
  #i: number;

  constructor(size: number) {
    this.#size = $state(size);
    this.#items = $state([]);
    this.#i = $state(0);
  }

  push(item: Item) {
    this.#items[this.#i] = item;
    this.#i = (this.#i + 1) % this.#size;
  }

  get top(): Item | undefined {
    return this.#items[this.#i];
  }

  items(): (Item | undefined)[] {
    return range(this.#size).map((i) => this.#items[(this.#i + i) % this.#size]);
  }
}
