import type { ReactElement } from 'react';
import Icon from './icon';
import type { TitleProps } from './types/title';

const Title = ({ id, icon }: TitleProps): ReactElement => {
  return (
    <div className="flex items-center">
      <Icon icon={icon} />
      <span className="mx-2">{id}</span>
    </div>
  )
}

export default Title;