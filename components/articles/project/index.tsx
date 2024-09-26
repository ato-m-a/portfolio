"use client";

import type { FC } from 'react';
import trpc from '@trpc.client';
import ProjectContent from './content';

const Project: FC = () => {
  const { data } = trpc.project.getMany.useQuery();

  return (
    <ul className="flex flex-col">
      {data && data.map((project) => <ProjectContent key={project.name} {...project} />)}
    </ul>
  )
}

export default Project;