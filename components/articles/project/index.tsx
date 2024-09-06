import type { FC } from 'react';
import type { ProjectFixtureSchema } from '@/schema/project.schema';
import FixtureRepository from '@/common/repository';
import ProjectContent from './content';

export { default as content } from './content';
export { default as wrapper } from './wrapper';

const Project: FC = () => {
  const projectFixture = FixtureRepository.get<ProjectFixtureSchema>('project');

  return (
    <ul className="flex flex-col">
      {projectFixture.map((project) => <ProjectContent key={project.name} {...project} />)}
    </ul>
  )
}

export default Project;