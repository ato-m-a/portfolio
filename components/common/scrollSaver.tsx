"use client";

import { offsetState } from '@/store/offset';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';

const ScrollSaver = (): ReactElement => {
  const setOffset = useSetRecoilState(offsetState);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        setOffset(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setOffset, pathname]);

  return (
    <div id="scroll-saver" className="opacity-0 w-0 h-0" />
  )
}

export default ScrollSaver;