"use client";

import type { FC } from 'react';
import { useCareers } from '@/hooks/query';
import ExperienceContent from './content';

const Experience: FC = () => {
  const { data } = useCareers();

  return (
    <ul className="flex flex-col">
      {data && data.map((career) => (
        <ExperienceContent key={career.id} {...career} />
      ))}
    </ul>
  )
}

export default Experience;