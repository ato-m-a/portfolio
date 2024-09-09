"use client";

import type { FC } from 'react';
import { useProjects } from '@/hooks/query';
import ProjectContent from './content';

const Project: FC = () => {
  const { data } = useProjects();

  return (
    <ul className="flex flex-col">
      {data && data.map((project) => <ProjectContent key={project.name} {...project} />)}
    </ul>
  )
}

export default Project;