import { z } from 'zod';

export type BulletSchema = z.infer<typeof bulletSchema>;
export type BulletinSchema = z.infer<typeof bulletinSchema>;

export const bulletSchema = z.object({
  outer: z.string(),
  inner: z.array(z.string()).optional()
})

const bulletinSchema = z.object({
  bullets: z.array(bulletSchema)
})

export default bulletinSchema;