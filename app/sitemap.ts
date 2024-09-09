import type { MetadataRoute } from 'next';
import portfolioRepository from '@/repository/portfolio.repository';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = await portfolioRepository.getMany();

  return [
    {
      url: 'https://ato-m-a.me',
      lastModified: new Date(),
      priority: 1
    },
    ...paths.map(({ pathname }) => ({
      url: `https://ato-m-a.me/portfolio/${pathname}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ]
}