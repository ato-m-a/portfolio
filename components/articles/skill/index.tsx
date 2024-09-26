"use client";

import type { FC } from 'react';
import trpc from '@trpc.client';
import ListItem from './listItem'

const Skill: FC = () => {
  const { data } = trpc.skill.getMany.useQuery();

  return (
    <ul className="w-full">
      {data && data.map((data) => (
        <ListItem key={data.id} {...data} />
      ))}
    </ul>
  )
}

export default Skill;