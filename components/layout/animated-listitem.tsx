"use client";

import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/components/fc';
import { useRef } from 'react';

const AnimatedListitem: ReactFC = ({ children }) => {
  const wrapperRef = useRef<HTMLLIElement>(null);
  useAnimation(wrapperRef);

  return (
    <li className="my-10" ref={wrapperRef}>
      {children}
    </li>
  )
}

export default AnimatedListitem;