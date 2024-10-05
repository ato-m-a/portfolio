import type { FC } from 'react';
import type { ProjectSchema } from '@/schema/project.schema';
import { AnimatedListItem, List, ResponsiveArticle } from '@/components/core';
import Link from 'next/link';

const ProjectContent: FC<ProjectSchema> = ({
  name,
  period,
  role,
  participants,
  companyName,
  portfolio,
  detail
}) => {
  return (
    <AnimatedListItem>
      <ResponsiveArticle>
        <ResponsiveArticle.title>
          {
            portfolio
              ? (
                <Link 
                  className="inline-block hv-underline text-xl my-2 text-blue-900 cursor-pointer" 
                  href={portfolio.pathname}
                  passHref
                >
                  {name}
                </Link>
              ) : <h3 className="text-xl my-2">{name}</h3>
          }
          <p className="text-lg font-light">
            {companyName} <span className="text-lg">({participants}명)</span>
          </p>
          <div className="mt-1 max-lg:flex max-lg:flex-row">
            <p className="text-lg max-lg:mr-4">{role}</p>
            <p className="text-lg font-thin">{period}</p>
          </div>
        </ResponsiveArticle.title>
        <ResponsiveArticle.content>
          <List>
            <List.linkedList item={detail} />
          </List>
        </ResponsiveArticle.content>
      </ResponsiveArticle>
    </AnimatedListItem>
  )
}

export default ProjectContent;