import Image from 'next/image';
import type { ReactElement } from 'react';
import type { IconProps } from './types/title';

const Icon = ({ icon }: IconProps): ReactElement => {
  const regex = new RegExp(/^\/images\/.*\.webp$/);

  if (regex.test(icon)) return <Image src={icon} alt="skill logo" className="w-6 h-6 rounded" width={500} height={500} />
  return <span className="text-xl">{icon}</span>
}

export default Icon;