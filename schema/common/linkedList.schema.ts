import { z } from 'zod';

const baseLinkedListSchema = z.object({
  content: z.string()
});

export type LinkedListSchema = z.infer<typeof baseLinkedListSchema> & {
  next?: LinkedListSchema;
  indent?: LinkedListSchema;
};

const linkedListSchema: z.ZodType<LinkedListSchema> = baseLinkedListSchema.extend({
  next: z.lazy(() => linkedListSchema.optional()),
  indent: z.lazy(() => linkedListSchema.optional())
});

export default linkedListSchema;