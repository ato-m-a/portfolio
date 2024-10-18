import { z } from 'zod';

export type SkillSchema = z.infer<typeof skillSchema>;

const skillSchema = z.object({
  id: z.number(),
  name: z.string(),
  icon: z.string(),
  contents: z.array(z.string()),
  orderIndex: z.number(),
  updatedAt: z.date(),
});

export default skillSchema;
