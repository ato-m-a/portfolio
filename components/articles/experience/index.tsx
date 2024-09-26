"use client";

import type { FC } from 'react';
import trpc from '@trpc.client';
import ExperienceContent from './content';

const Experience: FC = () => {
  const { data } = trpc.career.getMany.useQuery();

  return (
    <ul className="flex flex-col">
      {data && data.map((career) => (
        <ExperienceContent key={career.id} {...career} />
      ))}
    </ul>
  )
}

export default Experience;