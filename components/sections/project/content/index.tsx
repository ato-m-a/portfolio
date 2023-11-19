"use client";

import { Bullet, DividedRow } from '@/components/layout';
import { useAnimation } from '@/hooks/useAnimation';
import type { Project } from '@/types/common/fixtures';
import Link from 'next/link';
import { useRef, type ReactElement } from 'react';

const Content = (project: Project): ReactElement => {
  const { at, name, participants, role, period, bullets, path } = project;

  const liRef = useRef<HTMLLIElement>(null);
  useAnimation(liRef);

  return (
    <li className="my-10" ref={liRef}>
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
    </li>
  )
}

export default Content;