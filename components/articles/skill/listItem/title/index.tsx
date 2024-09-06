import type { FC } from 'react';
import type { SkillFixtureSchema } from '@/schema/skill.schema';
import Icon from './icon';

type TitleProps = Omit<SkillFixtureSchema, 'contents'>

const SkillTitle: FC<TitleProps> = ({ id, icon }) => {
  return (
    <div className="flex items-center">
      <Icon icon={icon} />
      <span className="mx-2">{id}</span>
    </div>
  )
}

export default SkillTitle;