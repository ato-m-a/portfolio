import { NextResponse } from 'next/server';
import { periodSerializer } from '@/common/serializer';
import prisma from '@/common/prisma';

export const dynamic = 'force-dynamic';

export const GET = async () => {
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
      ]
    });

  const serialized = careers.map((career) => periodSerializer(career, '재직중'));

  return NextResponse.json(serialized);
}