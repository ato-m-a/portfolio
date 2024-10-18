import type { MetadataRoute } from 'next';
// import prisma from '@/common/prisma';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // const paths = await prisma.portfolio.findMany();

  return [
    {
      url: 'https://ato-m-a.me',
      lastModified: new Date(),
      priority: 1,
    },
    // ...paths.map(({ pathname }) => ({
    //   url: `https://ato-m-a.me/portfolio/${pathname}`,
    //   lastModified: new Date(),
    //   priority: 0.8
    // }))
  ];
};

export default sitemap;
