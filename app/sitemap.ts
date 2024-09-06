import type { Project } from '@/types/common/fixtures';
import type { MetadataRoute } from 'next';
import FixtureRepository from '@/common/repository';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = FixtureRepository.get<Project>('project');
  const filtered = projects.filter((project) => project.path);

  return [
    {
      url: 'https://ato-m-a.me',
      lastModified: new Date(),
      priority: 1
    },
    ...filtered.map((project) => ({
      url: `https://ato-m-a.me${project.path}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ]
}