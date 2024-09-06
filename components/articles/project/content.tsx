import type { FC } from 'react';
import type { ProjectFixtureSchema } from '@/schema/project.schema';
import { AnimatedListItem, Bullet, ResponsiveArticle } from '@/components/core';
import Link from 'next/link';

const ProjectContent: FC<ProjectFixtureSchema> = ({ at, name, participants, role, period, bullets, path }) => {
  return (
    <AnimatedListItem>
      <ResponsiveArticle>
        <ResponsiveArticle.title>
          {
            path
              ? <Link className="hv-underline text-xl my-2 text-blue-900 cursor-pointer" href={path}>{name}</Link>
              : <h3 className="text-xl my-2">{name}</h3>
          }
          <p className="text-lg font-light">
            {at} <span className="text-lg">({participants}명)</span>
          </p>
          <div className="mt-1 max-lg:flex max-lg:flex-row">
            <p className="text-lg max-lg:mr-4">{role}</p>
            <p className="text-lg font-thin">{period}</p>
          </div>
        </ResponsiveArticle.title>
        <ResponsiveArticle.content>
          <ul className="flex-1 pl-4 max-lg:px-14">
            {
              bullets.map((bullet, index) => (
                <Bullet key={`project-bullet-${index}`} {...bullet} />
              ))
            }
          </ul>
        </ResponsiveArticle.content>
      </ResponsiveArticle>
    </AnimatedListItem>
  )
}

export default ProjectContent;