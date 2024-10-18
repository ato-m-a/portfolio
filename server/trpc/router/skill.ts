import t from '../trpc';

export const skillRouter = t.router({
  getMany: t.procedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.skill.findMany({
      orderBy: {
        orderIndex: 'asc',
      },
    });
  }),
});
