"use client";

import type { ReactFC } from '@/types/components/fc';
import { useRef } from 'react';
import useAnimation from '@/hooks/useAnimation';

const Figure: ReactFC = ({ children }) => {
  const figureRef = useRef<HTMLElement>(null);
  useAnimation(figureRef, true);

  return (
    <figure className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center max-md:px-10" ref={figureRef}>
      {children}
    </figure>
  )
}

export default Figure;