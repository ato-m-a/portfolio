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
  subItems: z.lazy(() => linkedListSchema.optional())
});

export default linkedListSchema;