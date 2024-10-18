'use client';

import type { ArticleProps } from './types';
import { useRef, type FC, type PropsWithChildren } from 'react';
import useAnimation from '@/hooks/useAnimation';

type Props = PropsWithChildren<Omit<ArticleProps, 'title' | 'subtitle' | 'content'>>;

const ArticleWrapper: FC<Props> = ({ children, className, id, ...props }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAnimation(sectionRef);

  return (
    <section className={`w-full pb-32 ${className ?? ''}`} id={id} {...props}>
      <div className="container mx-auto" ref={sectionRef}>
        {children}
      </div>
    </section>
  );
};

export default ArticleWrapper;
