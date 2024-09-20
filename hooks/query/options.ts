// import repositories
import skillRepository from '@/repository/skill.repository';
import careerRepository from '@/repository/career.repository';
import projectRepository from '@/repository/project.repository';

// lib
import { getLastUpdatedAt } from './lib';

// constant
import { STALE_TIME } from '@/constants/staleTime';

/** queryKeys */
export const queryKeys = {
  getSkills: () => ['skill', 'list'],
  getCareers: () => ['career', 'list'],
  getProjects: () => ['project', 'list']
};

/** queryOptions */
const queryOptions = {
  getSkills: () => ({
    queryKey: queryKeys.getSkills(),
    queryFn: () => skillRepository.getMany(),
    staleTime: STALE_TIME
  }),
  getCareers: () => ({
    queryKey: queryKeys.getCareers(),
    queryFn: () => careerRepository.getMany(),
    staleTime: STALE_TIME
  }),
  getProjects: () => ({
    queryKey: queryKeys.getProjects(),
    queryFn: () => projectRepository.getMany(),
    staleTime: STALE_TIME
  }),
  getMetadata: () => ({
    queries: [
      queryOptions.getSkills(),
      queryOptions.getCareers(),
      queryOptions.getProjects()
    ],
    combine: getLastUpdatedAt
  })
};

export default queryOptions;