import type { NextPage } from 'next';
import type { NotionProps, Params } from './types';
import { notFound } from 'next/navigation';
import portfolioRepository from '@/repository/portfolio.repository';
import getNotionPage from '@/common/notion';
import * as Notion from '@/components/articles/portfolio';

async function fetchData(params: Params) {
  const pathname = decodeURI(params.pathname);
  const portfolio = await portfolioRepository.get(pathname);
  
  if (!portfolio) notFound();

  const recordMap = await getNotionPage(portfolio.pageId);

  return { portfolio, recordMap };
}
const PortfolioPage: NextPage<NotionProps> = async ({ params }) => {
  const { portfolio, recordMap } = await fetchData(params);
  
  return (
    <>
      <Notion.header src={portfolio.coverImage} title={portfolio.title} />
      <Notion.renderer recordMap={recordMap} />
    </>
  )
}

export default PortfolioPage;