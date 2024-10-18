import type { ReactElement, PropsWithChildren } from 'react';
import LinkedList from './linkedList';

const List = ({ children }: PropsWithChildren): ReactElement => (
  <ul className="flex-1 pt-4 pl-4 max-lg:px-14">{children}</ul>
);

List.linkedList = LinkedList;

export default List;
