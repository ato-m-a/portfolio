import type { FC } from 'react';
import type { LinkedListProps } from './types';

const LinkedList: FC<LinkedListProps> = ({ item, depth = 0 }) => {
  return (
    <>
      <li className={`mb-2 ${depth > 0 ? 'list-indent' : 'list-disc'}`}>{item.content}</li>
      {
        item.indent && (
          <li>
            <ul className={`pl-${(depth + 1) * 4}`}>
              <LinkedList item={item.indent} depth={depth + 1} />
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