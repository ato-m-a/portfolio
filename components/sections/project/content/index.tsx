import { AnimatedListitem, Bullet, DividedRow } from '@/components/layout';
import type { Project } from '@/types/common/fixtures';
import Link from 'next/link';
import type { ReactElement } from 'react';

const Content = (project: Project): ReactElement => {
  const { at, name, participants, role, period, bullets, path } = project;

  return (
    <AnimatedListitem>
      <DividedRow.responsiveWrapper>
        <DividedRow.titleColumn>
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
        </DividedRow.titleColumn>
        <DividedRow.contentColumn>
          <ul className="flex-1 pl-4 max-lg:px-14">
            {
              bullets.map((bullet, index) => (
                <Bullet key={`project-bullet-${index}`} {...bullet} />
              ))
            }
          </ul>
        </DividedRow.contentColumn>
      </DividedRow.responsiveWrapper>
    </AnimatedListitem>
  )
}

export default Content;