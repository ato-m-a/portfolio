import type { FC } from 'react';
import type { CareerSchema } from '@/schema/career.schema';
import { AnimatedListItem, ResponsiveArticle } from '@/components/core';
import { List } from '@/components/core';

const ExperienceContent: FC<CareerSchema> = ({
  company: { name: companyName, url: companyUrl },
  position,
  period,
  description,
  detail,
}) => {
  return (
    <AnimatedListItem>
      <ResponsiveArticle>
        <ResponsiveArticle.title>
          <h3 className="text-4xl my-2">{companyName}</h3>
          {companyUrl && (
            <a href={companyUrl} target="_blank" rel="noreferer noopener" className="hv-underline text-xl block italic font-thin w-fit">
              {companyUrl}
            </a>
          )}
          <h4 className="text-xl my-2">{position}</h4>
          <p className="text-lg font-thin">{period}</p>
        </ResponsiveArticle.title>
        <ResponsiveArticle.content className="pt-2">
          <p className="italic text-xl font-thin max-lg:text-center">{description}</p>
          <List>
            <List.linkedList item={detail} />
          </List>
        </ResponsiveArticle.content>
      </ResponsiveArticle>
    </AnimatedListItem>
  )
}

export default ExperienceContent;