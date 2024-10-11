'use client';

import type { ReactFC } from '@/types/components/fc';
import { Provider } from 'jotai';

const AtomProvider: ReactFC = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default AtomProvider;
