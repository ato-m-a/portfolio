import { z } from 'zod';
import portfolioSchema from './portfolio.schema';
import linkedListSchema from './common/linkedList.schema';

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectSchema = z.object({
  id: z.number(),
  priority: z.number(),
  name: z.string(),
  period: z.string(),
  role: z.string(),
  participants: z.number(),
  detail: linkedListSchema,
  companyName: z.string().nullable(),
  portfolio: portfolioSchema.nullable(),
  updatedAt: z.date()
});

export default projectSchema;