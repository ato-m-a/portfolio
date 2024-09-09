import type { QueryOptions } from '@/hooks/query/types';
import { dehydrate } from '@tanstack/react-query';
import getQueryClient from './queryClient';

const getDehydratedQuery = async <Q extends Array<QueryOptions<any>>>(
  queries: Q
) => {
  const queryClient = getQueryClient();

  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({ queryKey, queryFn })
    )
  );

  return dehydrate(queryClient);
};

export default getDehydratedQuery;