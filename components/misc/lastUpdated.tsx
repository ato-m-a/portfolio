'use client';

import type { FC } from 'react';
import useLastUpdatedAt from '@/hooks/useLastUpdatedAt';

const LastUpdated: FC = () => {
  const lastUpdatedAt = useLastUpdatedAt();

  return (
    <div className="fixed font-thin p-2 bottom-2 left-2 max-md:text-sm">
      <p>{lastUpdatedAt}</p>
    </div>
  );
};

export default LastUpdated;
