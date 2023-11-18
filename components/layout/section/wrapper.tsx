"use client";

import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/components/fc';
import { useRef } from 'react';
import type { WrapperProps } from './types/wrapper';

const SectionWrapper: ReactFC<WrapperProps> = ({ children, className, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAnimation(sectionRef);

  return (
    <section className={`w-full pb-32 ${className ?? ''}`} id={id}>
      <div className="container mx-auto" ref={sectionRef}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper;