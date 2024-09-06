import type { FC } from 'react';
import type { SkillFixtureSchema } from '@/schema/skill.schema';
import Image from 'next/image';

type IconProps = Pick<SkillFixtureSchema, 'icon'>;

const SkillIcon: FC<IconProps> = ({ icon }) => {
  const isAssetPathRegexp = new RegExp(/^\/images\/.*\.webp$/);

  if (isAssetPathRegexp.test(icon)) return <Image src={icon} alt="skill logo" className="w-6 h-6 rounded" width={500} height={500} />
  return <span className="text-xl">{icon}</span>
}

export default SkillIcon;