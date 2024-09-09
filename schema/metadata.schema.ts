import { z } from 'zod';

export type MetadataSchema = z.infer<typeof metadataSchema>;

const metadataSchema = z.object({
  updatedAt: z.string().nullable()
});

export default metadataSchema;