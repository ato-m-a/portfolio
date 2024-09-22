"use client";

import type { FC, PropsWithChildren } from 'react';
import { useRef } from 'react';
import useAnimation from '@/hooks/useAnimation';

const Figure: FC<PropsWithChildren> = ({ children }) => {
  const figureRef = useRef<HTMLElement>(null);
  useAnimation(figureRef, true);

  return (
    <figure className="min-w-screen min-h-screen bg-gray-100 flex flex-col justify-center items-center max-md:p-10" ref={figureRef}>
      {children}
    </figure>
  )
}



export default Figure;