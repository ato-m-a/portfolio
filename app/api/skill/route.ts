import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

export const dynamic = 'force-dynamic';

export const GET = async () => {
  const skills = await prisma.skill
    .findMany({
      orderBy: {
        orderIndex: 'asc'
      }
    });
  return NextResponse.json(skills);
}