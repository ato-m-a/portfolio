import { NextResponse } from 'next/server';
import { periodSerializer } from '@/common/serializer';
import prisma from '@/common/prisma';

export const dynamic = 'force-dynamic';

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
        career: true,
        portfolio: true
      }
    });

  const serialized = projects.map((project) => periodSerializer(project, '진행중'));

  return NextResponse.json(serialized);
}