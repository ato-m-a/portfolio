"use client";

import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/components/fc';
import { useRef } from 'react';

const Wrapper: ReactFC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useAnimation(wrapperRef, true);

  return (
    <div className="bg-gray-100 w-screen h-screen" ref={wrapperRef}>
      {children}
    </div>
  )
}

export default Wrapper;