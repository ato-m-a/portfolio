import type { FC } from 'react';
import type { LinkedListProps } from './types';

const LinkedList: FC<LinkedListProps> = ({ item, depth = 0, isIndentItem }) => {
  return (
    <>
      <li className={`mb-2 ${depth > 0 ? 'list-indent' : 'list-disc'} ${isIndentItem ? 'my-2' : ''}`}>{item.content}</li>
      {
        item.indent && (
          <li className="mb-2">
            <ul className={`pl-${(depth + 1) * 4}`}>
              <LinkedList item={item.indent} depth={depth + 1} isIndentItem />
            </ul>
          </li>
        )
      }
      {
        item.next && (
          <LinkedList item={item.next} depth={depth} />
        )
      }
    </>
  )
}

export default LinkedList;