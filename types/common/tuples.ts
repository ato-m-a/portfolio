export type Tuples<T, Length extends number, R extends T[] = []> = 
  R['length'] extends Length 
    ? Readonly<R> 
    : Tuples<T, Length, [T, ...R]>;