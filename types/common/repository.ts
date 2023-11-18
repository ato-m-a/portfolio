export interface By<T> {
  key: keyof T;
  value: string;
}

export interface Repository<T> {
  getMany(): T[];
  getOne(): {
    by: (options: By<T>) => any;
    execute: () => T | null;
  }
}