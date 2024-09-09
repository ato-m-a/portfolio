import { z } from 'zod';
import linkedListSchema from './common/linkedList.schema';

export type CareerSchema = z.infer<typeof careerSchema>;

const careerSchema = z.object({
  id: z.number(),
  companyName: z.string(),
  position: z.string(),
  period: z.string(),
  description: z.string(),
  detail: linkedListSchema,
  companyUrl: z.string().nullable()
});

export default careerSchema;