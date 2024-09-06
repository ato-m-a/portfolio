import type { FCProps } from '@/types/components/fc';
import type { SkillFixtureSchema } from '@/schema/skill.schema';

export type ContentProps = FCProps & Pick<SkillFixtureSchema, 'id' | 'contents'>;