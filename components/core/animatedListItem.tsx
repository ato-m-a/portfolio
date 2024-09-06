"use client";

import { useRef, type FC, type PropsWithChildren } from 'react';
import useAnimation from '@/hooks/useAnimation';

const AnimatedListItem: FC<PropsWithChildren> = ({ children }) => {
  const wrapperRef = useRef<HTMLLIElement | null>(null);
  useAnimation(wrapperRef);

  return (
    <li className="my-10" ref={wrapperRef}>
      {children}
    </li>
  )
}

export default AnimatedListItem;