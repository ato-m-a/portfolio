"use client";

import { useAccordion } from '@/hooks/useAccordion';
import type { ReactFC } from '@/types/components/fc';
import { useMemo } from 'react';
import Arrow from './arrow';
import Body from './body';
import type { ContentProps } from './types/content';

const Content: ReactFC<ContentProps> = ({ children, id, bullets }) => {
  const accordionKey = useMemo(() => Symbol(id), []);
  const [isActivate, toggleAccordion] = useAccordion(accordionKey);

  return (
    <li>
      <div className="relative px-4 py-4 border border-gray-400 shadow cursor-pointer font-medium" onClick={toggleAccordion}>
        {children}
        <Arrow $activate={isActivate} className="block absolute w-4 h-2 right-4 bg-center bg-no-repeat bg-cover" />
      </div>
      <Body $activate={isActivate} className="border-x border-gray-400 shadow font-extralight">
        <ul className="list-disc pl-10">
          {
            bullets.map((bullet, index) => (
              <li key={`content-li-${index}`} className="my-2">
                {bullet}
              </li>
            ))
          }
        </ul>
      </Body>
    </li>
  )
}

export default Content;