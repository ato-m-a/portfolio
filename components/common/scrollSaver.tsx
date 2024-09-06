"use client";

import { usePathname } from 'next/navigation';
import { useEffect, type ReactElement } from 'react';

/**
 * @description 스크롤 위치를 기억하고 돌려주는 컴포넌트
 * @todo 서버 컴포넌트에서 훅 사용이 불가해서 만들었는데 더 좋은 방법 있을지 찾아보자
 */
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