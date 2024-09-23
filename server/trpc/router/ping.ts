import t from '../trpc';

export const pingRouter = t.router({
  ping: t.procedure.query(() => {
    return 'Pong!';
  })
});