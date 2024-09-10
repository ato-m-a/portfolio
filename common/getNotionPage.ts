import { NotionAPI } from 'notion-client';
import portfolioRepository from '@/repository/portfolio.repository';
import { notFound } from 'next/navigation';

const getNotionPage = async (pathname: string) => {
  const portfolio = await portfolioRepository.get(pathname);

  if (!portfolio) return notFound();

  const notionClient = new NotionAPI();
  const recordMap = await notionClient.getPage(portfolio.pageId);

  return { portfolio, recordMap };
}

export default getNotionPage;