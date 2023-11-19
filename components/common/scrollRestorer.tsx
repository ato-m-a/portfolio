"use client";

import { offsetState } from '@/store/offset';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

const ScrollRestorer = (): ReactElement => {
  const currentOffset = useRecoilValue(offsetState);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      if (currentOffset === 0) return;

      window.scrollTo({ top: currentOffset, left: 0, behavior: 'instant' });
      return;
    }

    if (pathname.includes('/portfolio')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
  }, [pathname]);

  return (
    <div id="scroll-restorer" className="opacity-0 w-0 h-0" />
  )
}

export default ScrollRestorer;