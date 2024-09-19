import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

export const GET = async () => {
  const portfolios = await prisma.portfolio.findMany();

  return NextResponse.json(portfolios);
}