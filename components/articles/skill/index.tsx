"use client";

import type { FC } from 'react';
import { useSkills } from '@/hooks/query';
import ListItem from './listItem'

const Skill: FC = () => {
  const { data } = useSkills();

  return (
    <ul className="w-full">
      {data && data.map((data) => (
        <ListItem key={data.id} {...data} />
      ))}
    </ul>
  )
}

export default Skill;