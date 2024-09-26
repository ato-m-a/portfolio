import { createServerSideHelpers } from '@trpc/react-query/server';
import { createCaller, appRouter } from '@/server/trpc/router/_app';
import createContext from '@/server/trpc/context';
import superjson from 'superjson';

const trpc = createCaller(createContext());

export const createHelpers = () => createServerSideHelpers({
  router: appRouter,
  ctx: createContext(),
  transformer: superjson
});

export default trpc;