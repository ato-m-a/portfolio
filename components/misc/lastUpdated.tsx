"use client";

import type { FC } from 'react';
import getLastUpdatedAt from '@/common/getLastUpdatedAt';
import trpc from '@trpc.client';

const LastUpdated: FC = () => {
  const data = trpc.useQueries((t) => [
    t.skill.getMany(),
    t.career.getMany(),
    t.project.getMany(),
  ]);

  if (!data) return null;

  const lastUpdated = getLastUpdatedAt(data);

  return (
    <div className="fixed font-thin p-2 bottom-2 left-2 max-md:text-sm">
      <p>{lastUpdated}</p>
    </div>
  )
}

export default LastUpdated;