import { z } from 'zod';
import bulletinSchema from './common/bulletin.schema';

export type ProjectFixtureSchema = z.infer<typeof projectFixtureSchema>;

const projectFixtureSchema = z.object({
  order: z.number(),
  name: z.string(),
  at: z.string(),
  period: z.string(),
  role: z.string(),
  participants: z.number(),
  path: z.string().nullable()
}).extend(bulletinSchema.shape);

export default projectFixtureSchema;