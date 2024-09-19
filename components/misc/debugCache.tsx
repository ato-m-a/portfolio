import type { FC } from 'react';
import { kstFormat } from '@toss/date';

const DebugCache: FC = () => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed left-4 bottom-12 rounded-lg bg-white opacity-70 shadow-lg shadow-slate-200 p-4">
      Cache Hit: {kstFormat(new Date(), 'yyyy-MM-dd HH:mm:ss')}
    </div>
  )
}

export default DebugCache;