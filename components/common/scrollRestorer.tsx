"use client";

import { usePathname } from 'next/navigation';
import { useEffect, type ReactElement } from 'react';

const ScrollRestorer = (): ReactElement => {
  const pathname = usePathname();

  useEffect(() => {
    const currentOffset = window.sessionStorage.getItem('offset');

    if (currentOffset) {
      const parsed = parseFloat(currentOffset);

      if (pathname === '/') {
        window.scrollTo({ top: parsed, left: 0, behavior: 'instant' });
        return;
      }

      if (pathname.includes('/portfolio')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
      }
    }
  }, [pathname]);

  return (
    <div id="scroll-restorer" className="opacity-0 w-0 h-0" />
  )
}

export default ScrollRestorer;