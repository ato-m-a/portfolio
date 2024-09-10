import { NotionAPI } from 'notion-client';
import portfolioRepository from '@/repository/portfolio.repository';
import { notFound } from 'next/navigation';

const getNotionPage = async (pathname: string) => {
  const { pageId, ...portfolio } = await portfolioRepository.get(pathname);

  if (!pageId) return notFound();

  const notionClient = new NotionAPI();
  const recordMap = await notionClient.getPage(pageId);

  return { portfolio, recordMap };
}

export default getNotionPage;