import type { NextPage } from 'next';
import type { PortfolioProps } from './types';
import getNotionPage from '@/common/getNotionPage';
import * as Notion from '@/components/articles/portfolio';

export const generateStaticParams = async () => {
  return [];
}

const PortfolioPage: NextPage<PortfolioProps> = async ({ params: { pathname } }) => {
  const { portfolio, recordMap } = await getNotionPage(pathname);
  
  return (
    <>
      <Notion.header src={portfolio.coverImage} title={portfolio.title} />
      <Notion.renderer recordMap={recordMap} />
    </>
  )
}

export default PortfolioPage;