import type { UseQueryResult } from '@tanstack/react-query';
import { kstFormat } from '@toss/date';

type CommonQuery = UseQueryResult<Array<{ updatedAt: Date } & Record<string, any>>>;

const getLastUpdatedAt = (queries: CommonQuery[]) => {
  const flatted = queries
    .flatMap((item) => item?.data || [])
    .flatMap((item) => new Date(item?.updatedAt) || []);

  const findFirst = flatted.reduce((acc, cur) => (cur > acc ? cur : acc), new Date(0));
  return findFirst ? kstFormat(findFirst, 'yyyy년 M월 d일 업데이트') : null;
}

export default getLastUpdatedAt;