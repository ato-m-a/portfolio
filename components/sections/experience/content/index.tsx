import { AnimatedWrapper, Bullet, DividedRow } from '@/components/layout';
import type { Career } from '@/types/common/fixtures';
import type { ReactElement } from 'react';

const Content = ({ company, url, position, period, description, bullets }: Career): ReactElement => {
  return (
    <AnimatedWrapper>
      <DividedRow.responsiveWrapper>
        <DividedRow.titleColumn>
          <h3 className="text-4xl my-2">{company}</h3>
          <a href={url} target="_blank" rel="noreferer noopener" className="hv-underline text-xl block italic font-thin">
            {url}
          </a>
          <h4 className="text-xl my-2">{position}</h4>
          <p className="text-lg font-thin">{period}</p>
        </DividedRow.titleColumn>
        <DividedRow.contentColumn className="pt-2">
          <p className="italic text-xl font-thin max-lg:text-center">{description}</p>
          <ul className="flex-1 pt-4 pl-4 max-lg:px-14">
            {
              bullets.map((bullet, index) => (
                <Bullet key={`experience-bullet-${index}`} {...bullet} />
              ))
            }
          </ul>
        </DividedRow.contentColumn>
      </DividedRow.responsiveWrapper>
    </AnimatedWrapper>
  )
}

export default Content;