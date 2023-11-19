"use client";

import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/components/fc';
import { useRef } from 'react';

const Wrapper: ReactFC = ({ children }) => {
  const listitemRef = useRef<HTMLLIElement>(null);
  useAnimation(listitemRef);

  return (
    <li className="my-10">
      {children}
    </li>
  )
}

export default Wrapper;