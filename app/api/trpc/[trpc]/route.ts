import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/trpc/router/_app';
import createContext from '@/server/trpc/context';

export const runtime = 'edge';

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    createContext,
    router: appRouter,
  });
};

export { handler as GET, handler as POST };