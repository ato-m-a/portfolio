import * as Notion from '@/components/articles/portfolio';
import type { LayoutProps } from '@/types/components/layout';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

export default function PortfolioLayout({ children }: LayoutProps) {
  return (
    <Notion.wrapper>
      {children}
    </Notion.wrapper>
  )
}