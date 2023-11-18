import type { FC, ReactNode } from 'react';

export interface FCProps {
  children: ReactNode;
  className?: string;
}

export type ReactFC<T = {}> = FC<T & FCProps>;