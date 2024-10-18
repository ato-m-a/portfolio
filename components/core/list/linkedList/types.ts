import type { LinkedListSchema } from '@/schema/common/linkedList.schema';

export interface LinkedListProps {
  item: LinkedListSchema;
  depth?: number;
  isIndentItem?: boolean;
}
