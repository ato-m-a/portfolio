import type { KyResponse } from 'ky';

export type Entity<PK extends string = 'id', PK_TYPE = number> = {
  [key in PK]: PK_TYPE;
} & Record<string, any>;

export interface IRepository<
  T extends Entity<PK, PK_TYPE>, 
  PK extends keyof T & string = 'id', 
  PK_TYPE = number
> {
  get: (id: PK_TYPE) => Promise<T>;
  getMany: () => Promise<T[]>;
  create: (item: Omit<T, PK>) => Promise<T>;
  update: (id: PK, item: Omit<T, PK>) => Promise<T>;
  delete: (id: PK_TYPE) => Promise<KyResponse<void>>;
}
