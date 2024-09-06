import { z } from 'zod';
import bulletinFixtureSchema from './common/bulletin.schema';

export type CareerFixtureSchema = z.infer<typeof careerFixtureSchema>;

const careerFixtureSchema = bulletinFixtureSchema(
  z.object({
    company: z.string(),
    url: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string()
  })
);

export default careerFixtureSchema;