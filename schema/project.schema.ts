import { z } from 'zod';
import bulletinFixtureSchema from './common/bulletin.schema';

export type ProjectFixtureSchema = z.infer<typeof projectFixtureSchema>;

const projectFixtureSchema = bulletinFixtureSchema(
  z.object({
    order: z.number(),
    name: z.string(),
    at: z.string(),
    period: z.string(),
    description: z.string(),
    role: z.string(),
    participants: z.number(),
    path: z.string().nullable()
  })
);

export default projectFixtureSchema;