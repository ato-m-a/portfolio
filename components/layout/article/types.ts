import type { HTMLAttributes, ReactNode } from 'react';

type HTMLElementProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export interface ArticleProps extends HTMLElementProps {
  id: string;
  title: string;
  subtitle: string;
  content: ReactNode;
}