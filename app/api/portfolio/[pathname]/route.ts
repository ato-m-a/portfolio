import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

interface Params {
  pathname: string;
}

export const GET = async (
  request: Request,
  { params }: { params: Params }
) => {
  const { pathname } = params;
    
  const portfolio = await prisma.portfolio.findFirst({
    where: { pathname }
  });

  return NextResponse.json(portfolio);
}