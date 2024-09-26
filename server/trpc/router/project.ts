import { getDateDistance } from '@/common/date';
import projectSchema from '@/schema/project.schema';
import linkedListSchema from '@/schema/common/linkedList.schema';
import t from '../trpc';

export const projectRouter = t.router({
  getMany: t.procedure
    .output(projectSchema.array())
    .query(async ({
      ctx: { prisma }
    }) => {
      const projects = await prisma.project
        .findMany({
          orderBy: [
            {
              priority: 'desc'
            },
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
            career: {
              include: {
                company: {
                  select: {
                    name: true
                  }
                }
              }
            },
            portfolio: true,
          }
        });

      return projects.map(({ 
        careerId: _, 
        career: { company },
        startDate,
        endDate,
        detail,
        ...restOf 
      }) => ({
        companyName: company?.name,
        period: getDateDistance(startDate, endDate, '진행중'),
        detail: linkedListSchema.parse(detail),
        ...restOf
      }));
    })
});