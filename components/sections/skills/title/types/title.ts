import type { Skill } from '@/types/common/fixtures';

export type TitleProps = Omit<Skill, 'bullets'>;

export type IconProps = Pick<Skill, 'icon'>;