"use client";

import { useAnimation } from '@/hooks/useAnimation';
import Image from 'next/image';
import { useMemo, useRef, type ReactElement } from 'react';
import { HeaderProps } from './types/header';

const Header = ({ src, title }: HeaderProps): ReactElement => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const blurred = useMemo(() => {
    return src.replace('.webp', '-blur.webp');
  }, []);

  useAnimation(imageWrapperRef, true);
  useAnimation(headingRef, true);

  return (
    <>
      <div className="relative w-full h-1/4 overflow-hidden" ref={imageWrapperRef}>
        <Image 
          src={src} 
          alt="header image" 
          className="object-cover w-full h-full" 
          placeholder="blur"
          blurDataURL={blurred}
          width={2000} 
          height={2000} 
          quality={100} 
        />
      </div>
      <h1 className="notion-page inline-block font-pretendard font-semibold text-4xl !pt-10 !pb-2 max-md:text-3xl" ref={headingRef}>{title}</h1>
    </>
  )
}

export default Header;