import type { FC } from 'react';
import type { CareerFixtureSchema } from '@/schema/career.schema';
import { AnimatedListItem, ResponsiveArticle } from '@/components/core';
import { Bullet } from '@/components/core';

const ExperienceContent: FC<CareerFixtureSchema> = ({ company, url, position, period, description, bullets }) => {
  return (
    <AnimatedListItem>
      <ResponsiveArticle>
        <ResponsiveArticle.title>
          <h3 className="text-4xl my-2">{company}</h3>
          <a href={url} target="_blank" rel="noreferer noopener" className="hv-underline text-xl block italic font-thin">
            {url}
          </a>
          <h4 className="text-xl my-2">{position}</h4>
          <p className="text-lg font-thin">{period}</p>
        </ResponsiveArticle.title>
        <ResponsiveArticle.content className="pt-2">
          <p className="italic text-xl font-thin max-lg:text-center">{description}</p>
          <ul className="flex-1 pt-4 pl-4 max-lg:px-14">
            {
              bullets.map((bullet, index) => (
                <Bullet key={`experience-bullet-${index}`} {...bullet} />
              ))
            }
          </ul>
        </ResponsiveArticle.content>
      </ResponsiveArticle>
    </AnimatedListItem>
  )
}

export default ExperienceContent;