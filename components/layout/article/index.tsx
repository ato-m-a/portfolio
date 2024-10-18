import type { FC } from 'react';
import type { ArticleProps } from './types';
import ArticleWrapper from './wrapper';
import ArticleHeader from './header';

const Article: FC<ArticleProps> = ({ title, subtitle, content, ...props }) => {
  return (
    <ArticleWrapper {...props}>
      <ArticleHeader title={title} subtitle={subtitle} />
      {content}
    </ArticleWrapper>
  );
};

export default Article;
