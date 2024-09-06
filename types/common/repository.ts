export interface By<T> {
  key: keyof T;
  value: string;
}

export interface Repository<T> {
  getMany(): T[];
  getOne(): {
    by: (options: By<T>) => ReturnType<Repository<T>['getOne']>;
    execute: () => T | null;
  }
}