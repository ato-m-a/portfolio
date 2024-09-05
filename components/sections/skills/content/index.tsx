"use client";

import type { ReactFC } from '@/types/components/fc';
import type { ContentProps } from './types/content';
import { memo, useMemo } from 'react';
import useAccordion from '@/hooks/useAccordion';
import Arrow from './arrow';
import Body from './body';

const Content: ReactFC<ContentProps> = ({ children, id, bullets }) => {
  const accordionKey = useMemo(() => Symbol(id), []);
  const { isActive, toggle } = useAccordion(accordionKey);

  return (
    <li>
      <div className="relative px-4 py-4 border border-gray-400 shadow cursor-pointer font-medium" onClick={toggle}>
        {children}
        <Arrow $activate={isActive} className="block absolute w-4 h-2 right-4 bg-center bg-no-repeat bg-cover" />
      </div>
      <Body $activate={isActive} className="border-x border-gray-400 shadow font-extralight">
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

export default memo(Content);