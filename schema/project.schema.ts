import { z } from 'zod';
import careerSchema from './career.schema';
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
  career: careerSchema,
  portfolio: portfolioSchema.optional()
});

export default projectSchema;