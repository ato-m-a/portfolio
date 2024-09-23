"use client";

import type { FC } from 'react';
import { useSkills } from '@/hooks/query';
import { trpc } from '@/common/trpc/client';
import ListItem from './listItem'

const Skill: FC = () => {
  const { data } = useSkills();
  const { data: ping } = trpc.ping.ping.useQuery();

  console.log(ping);

  return (
    <ul className="w-full">
      {data && data.map((data) => (
        <ListItem key={data.id} {...data} />
      ))}
    </ul>
  )
}

export default Skill;