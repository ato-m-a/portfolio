"use client";

import { useRef, type FC, type PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { STALE_TIME } from '@/constants/staleTime';
import { httpBatchLink } from '@trpc/client';
import { customLink } from '@/server/trpc/lib/link';
import trpc from '@trpc.client';
import superjson from 'superjson';

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const trpcClientRef = useRef(
    trpc.createClient({
      links: [
        customLink,
        httpBatchLink({
          url: '/api/trpc',
          transformer: superjson
        }),
      ]
    })
  );

  const queryClientRef = useRef<QueryClient>(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: STALE_TIME,
        }
      }
    })
  );

  return (
    <trpc.Provider client={trpcClientRef.current} queryClient={queryClientRef.current}>
      <QueryClientProvider client={queryClientRef.current}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default QueryProvider;