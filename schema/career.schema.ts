import { z } from 'zod';
import linkedListSchema from './common/linkedList.schema';
import companySchema from './company.schema';

export type CareerSchema = z.infer<typeof careerSchema>;

const careerSchema = z.object({
  id: z.number(),
  position: z.string(),
  period: z.string(),
  detail: linkedListSchema,
  company: companySchema,
  updatedAt: z.date()
});

export default careerSchema;