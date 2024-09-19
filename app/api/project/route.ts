import { NextResponse } from 'next/server';
import { periodSerializer } from '@/common/serializer';
import prisma from '@/common/prisma';

export const GET = async () => {
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

  const serialized = projects.map(({ 
    careerId: _, 
    career: { company }, 
    ...project 
  }) => ({
    ...periodSerializer(project, '진행중'),
    companyName: company?.name
  }));

  return NextResponse.json(serialized);
}