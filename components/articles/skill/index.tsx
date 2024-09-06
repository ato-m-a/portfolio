import type { FC } from 'react';
import type { SkillFixtureSchema } from '@/schema/skill.schema';
import FixtureRepository from '@/common/repository';
import ListItem from './listItem'

const Skill: FC = () => {
  const skillFixture = FixtureRepository.get<SkillFixtureSchema>('skills');

  return (
    <ul className="w-full">
      {skillFixture.map((data) => (
        <ListItem key={data.id} {...data} />
      ))}
    </ul>
  )
}

export default Skill;