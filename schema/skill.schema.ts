import { z } from 'zod';

export type SkillFixtureSchema = z.infer<typeof skillFixtureSchema>;

const skillFixtureSchema = z.object({
  id: z.string(),
  icon: z.string(),
  contents: z.array(z.string())
});

export default skillFixtureSchema;