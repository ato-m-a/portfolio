import type { QueryKey } from '@tanstack/react-query';

export interface QueryOptions<R = any> {
  queryKey: QueryKey;
  queryFn: () => Promise<R>;
}