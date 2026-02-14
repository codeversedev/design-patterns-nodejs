export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
  reset(): void;
}

// Generic Iterator — works with any collection of items
export class GenericIterator<T> implements Iterator<T> {
  private position = 0;

  constructor(private items: T[]) {}

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): T {
    if (!this.hasNext()) {
      throw new Error("No more elements");
    }
    return this.items[this.position++];
  }

  reset(): void {
    this.position = 0;
  }
}

// Generic filtered iterator — filters items by a predicate
export class FilteredIterator<T> implements Iterator<T> {
  private filtered: T[];
  private position = 0;

  constructor(items: T[], predicate: (item: T) => boolean) {
    this.filtered = items.filter(predicate);
  }

  hasNext(): boolean {
    return this.position < this.filtered.length;
  }

  next(): T {
    if (!this.hasNext()) {
      throw new Error("No more elements");
    }
    return this.filtered[this.position++];
  }

  reset(): void {
    this.position = 0;
  }
}
