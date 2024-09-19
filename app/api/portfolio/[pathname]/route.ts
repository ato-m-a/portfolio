import type { PortfolioProps } from '@/app/portfolio/[pathname]/types';
import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

export const GET = async (
  request: Request,
  { params: { pathname } }: PortfolioProps
) => {
  const portfolio = await prisma.portfolio.findFirst({
    where: { pathname }
  });

  return NextResponse.json(portfolio);
}