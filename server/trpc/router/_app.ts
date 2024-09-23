import t from '../trpc';

// routers
import { pingRouter } from './ping';

export const appRouter = t.router({
  ping: pingRouter
});

export const createCaller = t.createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;