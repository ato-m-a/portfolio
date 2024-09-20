"use client";

import type { FC } from 'react';
import { useMetadata } from '@/hooks/query';

const LastUpdated: FC = () => {
  const data = useMetadata();

  if (!data) return null;

  return (
    <div className="fixed font-thin p-2 bottom-2 left-2 max-md:text-sm">
      <p>{data}</p>
    </div>
  )
}

export default LastUpdated;