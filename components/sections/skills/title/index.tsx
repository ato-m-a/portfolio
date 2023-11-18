import type { ReactElement } from 'react';
import Icon from './icon';
import getComponent from './level';
import type { TitleProps } from './types/title';

const Title = ({ id, icon, level }: TitleProps): ReactElement => {
  const Level = getComponent(level);

  return (
    <div className="flex items-center">
      <Icon icon={icon} />
      <span className="mx-2">{id}</span>
      <Level />
    </div>
  )
}

export default Title;