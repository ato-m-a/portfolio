import { z } from 'zod';
import bulletinSchema from './common/bulletin.schema';

export type CareerFixtureSchema = z.infer<typeof careerFixtureSchema>;

const careerFixtureSchema = z.object({
  company: z.string(),
  url: z.string(),
  position: z.string(),
  period: z.string(),
  description: z.string()
}).extend(bulletinSchema.shape);

export default careerFixtureSchema;