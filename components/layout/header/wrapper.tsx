"use client";

import { useScroll } from '@/hooks/useScroll';
import type { ReactFC } from '@/types/components/fc';

const Wrapper: ReactFC = ({ children }) => {
  const scrolled = useScroll(100);

  return (
    <header className={`${scrolled ? 'head-down' : ''} fixed w-full py-12 bg-gray-100 z-50 max-lg:py-8 max-md:py-6`}>
      {children}
    </header>
  )
}

export default Wrapper;