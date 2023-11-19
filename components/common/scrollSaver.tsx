"use client";

import { offsetState } from '@/store/offset';
import { useEffect, type ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';

const ScrollSaver = (): ReactElement => {
  const setOffset = useSetRecoilState(offsetState);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scroll-saver" className="opacity-0 w-0 h-0" />
  )
}

export default ScrollSaver;