'use client';

import trpc from '@trpc.client';
import getLastUpdatedAt from '@/common/getLastUpdatedAt';

const useLastUpdatedAt = () => {
  const queries = trpc.useQueries((t) => [
    t.skill.getMany(),
    t.career.getMany(),
    t.project.getMany(),
  ]);

  if (!queries) return null;

  return getLastUpdatedAt(queries);
};

export default useLastUpdatedAt;
