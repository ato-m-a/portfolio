import { FixtureRepository } from '@/common/repository';
import * as Notion from '@/components/sections/portfolio';
import type { Portfolio } from '@/types/common/fixtures';
import { notFound } from 'next/navigation';
import { NotionAPI } from 'notion-client';
import type { NotionProps, Params } from './types';

async function fetchData(params: Params) {
  const name = decodeURI(params.name);
  const repository = new FixtureRepository<Portfolio>('portfolio');
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