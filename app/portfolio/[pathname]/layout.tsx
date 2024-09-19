import * as Notion from '@/components/articles/portfolio';
import type { FC, PropsWithChildren } from 'react';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

type Props = Required<PropsWithChildren>;

export const revalidate = 60;

const PortfolioLayout: FC<Props> = ({ children }) => (
  <Notion.wrapper>
    {children}
  </Notion.wrapper>
);

export default PortfolioLayout;