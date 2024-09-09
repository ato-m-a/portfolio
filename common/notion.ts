import { NotionAPI } from 'notion-client';

const getNotionPage = async (pageId: string) => {
  const notion = new NotionAPI();
  return await notion.getPage(pageId);
}

export default getNotionPage;