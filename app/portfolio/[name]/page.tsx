import type { PortfolioFixtureSchema } from '@/schema/portfolio.schema';
import type { NotionProps, Params } from './types';
import * as Notion from '@/components/articles/portfolio';
import { notFound } from 'next/navigation';
import { NotionAPI } from 'notion-client';
import FixtureRepository from '@/common/repository';

async function fetchData(params: Params) {
  const name = decodeURI(params.name);
  const repository = new FixtureRepository<PortfolioFixtureSchema>('portfolio');
  const portfolio = repository.getOne().by({ key: 'name', value: name }).execute();

  if (!portfolio) notFound();

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(portfolio.page_id);

  return { portfolio, recordMap };
}

export default async function PortfolioPage({ params }: NotionProps) {
  const { portfolio, recordMap } = await fetchData(params);
  
  return (
    <>
      <Notion.header src={portfolio.cover_image} title={portfolio.title} />
      <Notion.renderer recordMap={recordMap} />
    </>
  )
}