import { z } from 'zod';

export type BulletinFixtureSchema<Schema extends z.ZodObject<any>> = z.infer<ReturnType<typeof bulletinFixtureSchema<Schema>>>;

const bulletinFixtureSchema = <Schema extends z.ZodObject<any>>(schema: Schema) => z.object({
  bullets: z.array(
    z.object({
      outer: z.string(),
      inner: z.array(z.string()).optional()
    })
  )
}).extend(schema.shape);

export default bulletinFixtureSchema;