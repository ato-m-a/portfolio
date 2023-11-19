"use client";

import { usePathname } from 'next/navigation';
import { useEffect, type ReactElement } from 'react';

const ScrollSaver = (): ReactElement => {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/' && window.scrollY > 0) {
        window.sessionStorage.setItem('offset', window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id="scroll-saver" className="opacity-0 w-0 h-0" />
  )
}

export default ScrollSaver;