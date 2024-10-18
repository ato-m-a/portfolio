import type { ReactElement, PropsWithChildren } from 'react';
import ResponsiveTitle from './title';
import ResponsiveContent from './content';

const ResponsiveArticle = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="flex max-lg:flex-col">{children}</div>;
};

ResponsiveArticle.title = ResponsiveTitle;
ResponsiveArticle.content = ResponsiveContent;

export default ResponsiveArticle;
