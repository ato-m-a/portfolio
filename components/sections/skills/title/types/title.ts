import type { SkillFixtureSchema } from '@/schema/skill.schema';

export type TitleProps = Omit<SkillFixtureSchema, 'contents' | 'level'>;
export type IconProps = Pick<SkillFixtureSchema, 'icon'>;