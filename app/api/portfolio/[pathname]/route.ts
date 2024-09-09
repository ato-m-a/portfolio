import { NextResponse } from 'next/server';
import prisma from '@/common/prisma';

interface Params {
  pathname: string;
}

export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  const { pathname } = params;
  
  const portfolio = await prisma.portfolio.findFirst({
    where: {
      pathname
    }
  });

  return NextResponse.json(portfolio);
}