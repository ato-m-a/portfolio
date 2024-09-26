import t from '../trpc';

// routers
import { careerRouter } from './career';
import { projectRouter } from './project';
import { skillRouter } from './skill';

export const appRouter = t.router({
  skill: skillRouter,
  career: careerRouter,
  project: projectRouter
});

export const createCaller = t.createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;