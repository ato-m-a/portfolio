import type { SkillSchema } from '@/schema/skill.schema';
import { memo, type FC } from 'react';
import Icon from './icon';

type TitleProps = Pick<SkillSchema, 'name' | 'icon'>;

const SkillTitle: FC<TitleProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center">
      <Icon icon={icon} />
      <span className="mx-2">{name}</span>
    </div>
  );
};

export default memo(SkillTitle);
