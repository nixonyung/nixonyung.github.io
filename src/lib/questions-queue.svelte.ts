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
    keyFns = [],
  }: {
    question: WithIndex<Item> | undefined;
    numOptions: number;
    keyFns?: ((option: WithIndex<Item>) => string | number | undefined)[];
  }) {
    if (question === undefined || numOptions === 0) return [];

    /*

    Problem Statement:

    sample N elements (without replacement) WITH filtering


    Constraints:

    - need to efficiently find a new UNIQUE element if the current one is filtered out


    Inferior Solutions:

    - repeatedly call es-toolkit's `sampleSize` and filter until having enough elements
      - cons: will incorrectly return elements WITH replacement

    - shuffle the whole array and pick until having N elements
      - cons: shuffling the whole array has an unneccessary time cost when the array is large

    */

    const optionsWithKeys: {
      option: WithIndex<Item>;
      keys: ReturnType<(typeof keyFns)[number]>[];
    }[] = [];
    const keyss = keyFns.map((keyFn) => {
      const key = keyFn(question);
      return new Set(key ? [key] : []);
    });

    // Fisher-Yates shuffle, from left-to-right
    // (ref.) https://github.com/toss/es-toolkit/blob/3d75a713169c2db6fffe04121bc73ac0363d741e/src/array/shuffle.ts
    const idxs = [...this.#queue.idxs];
    let i = 0;
    while (optionsWithKeys.length < numOptions - 1 && i < idxs.length) {
      const j = randomInt(i, idxs.length);
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
      const idx = idxs[i];
      i++;

      if (idx === question.idx) continue;

      const option = this.#itemIdxToItem(idx);
      const keys = keyFns.map((keyFn) => keyFn(option));
      if (keys.some((key, i) => key && keyss[i].has(key))) continue;

      optionsWithKeys.push({ option, keys });
      for (const [i, key] of keys.entries()) {
        if (key) keyss[i].add(key);
      }
    }

    // add the real answer
    optionsWithKeys.splice(randomInt(optionsWithKeys.length + 1), 0, {
      option: question,
      keys: keyFns.map((keyFn) => keyFn(question)),
    });

    return sortBy(
      optionsWithKeys,
      range(keyFns.length).map(
        (i) =>
          ({ keys }) =>
            keys[i],
      ),
    ).map(({ option }) => option);
  }
}
