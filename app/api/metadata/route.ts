import { NextResponse } from 'next/server';
import { kstFormat } from '@toss/date';
import prisma from '@/common/prisma';

export const dynamic = 'force-dynamic';

/**
 * @todo 나중에는 metadata 별도 관리하자
 */
export const GET = async () => {
  const queryOptions = {
    orderBy: { updatedAt: 'desc' as 'desc' },
    select: { updatedAt: true }
  };

  const queriedData = await Promise.all([
    prisma.project.findFirst(queryOptions),
    prisma.portfolio.findFirst(queryOptions),
    prisma.career.findFirst(queryOptions),
    prisma.skill.findFirst(queryOptions)
  ]);

  const updatedAtList = queriedData.flatMap((item) => item?.updatedAt ?? []);
  const updatedAt = updatedAtList.length > 0
    ? updatedAtList.reduce((acc, cur) => (cur > acc ? cur : acc), new Date(0))
    : null;

  return NextResponse.json({ updatedAt: updatedAt ? kstFormat(updatedAt, 'yyyy년 M월 d일 업데이트') : null });
}