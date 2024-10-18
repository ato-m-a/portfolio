import type { ArticleProps } from './types';
import type { FC } from 'react';

type Props = Pick<ArticleProps, 'title' | 'subtitle'>;

const ArticleHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <header className="mb-16">
      <h3 className="text-3xl text-center mb-2 font-medium">{title}</h3>
      <div className="text-xl text-center">{subtitle}</div>
    </header>
  );
};

export default ArticleHeader;
