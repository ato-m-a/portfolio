import { getDateDistance } from '@/common/date';
import t from '../trpc';
import careerSchema from '@/schema/career.schema';
import linkedListSchema from '@/schema/common/linkedList.schema';

export const careerRouter = t.router({
  getMany: t.procedure
    .output(careerSchema.array())
    .query(async ({
      ctx: { prisma }
    }) => {
      const careers = await prisma.career
        .findMany({
          orderBy: [
            {
              endDate: {
                sort: 'desc',
                nulls: 'first'
              }
            },
            {
              startDate: 'desc'
            }
          ],
          include: {
            company: true
          }
        });

      return careers.map(({ startDate, endDate, detail, ...restOf }) => ({
        ...restOf,
        detail: linkedListSchema.parse(detail),
        period: getDateDistance(startDate, endDate, '재직중')
      }));
    })
});