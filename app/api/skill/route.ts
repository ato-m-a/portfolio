import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

export const GET = async () => {
  const skills = await prisma.skill
    .findMany({
      orderBy: {
        orderIndex: 'asc'
      }
    });
  return NextResponse.json(skills);
}