import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';
import { STALE_TIME } from '@/constants/staleTime';

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: STALE_TIME,
        },
      },
    }),
);

export default getQueryClient;
