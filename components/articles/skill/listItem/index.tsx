"use client";

import type { SkillSchema } from '@/schema/skill.schema';
import { memo, useMemo, type FC } from 'react';
import { Arrow, Body } from './styled';
import SkillTitle from './title';
import useAccordion from '@/hooks/useAccordion';

const ListItem: FC<SkillSchema> = ({ id, name, icon, contents }) => {
  const accordionKey = useMemo(() => Symbol(id), [id]);
  const { isActive, toggle } = useAccordion(accordionKey);

  return (
    <li>
      <div className="relative px-4 py-4 border border-gray-400 shadow cursor-pointer font-medium" onClick={toggle}>
        <SkillTitle name={name} icon={icon} />
        <Arrow $activate={isActive} className="block absolute w-4 h-2 right-4 bg-center bg-no-repeat bg-cover" />
      </div>
      <Body $activate={isActive} className="border-x border-gray-400 shadow font-extralight">
        <ul className="list-disc pl-10">
          {
            isActive && contents.map((content, index) => (
              <li key={`content-li-${index}`} className="my-2">
                {content}
              </li>
            ))
          }
        </ul>
      </Body>
    </li>
  )
}

export default memo(ListItem);