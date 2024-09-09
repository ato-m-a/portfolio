// import repositories
import skillRepository from '@/repository/skill.repository';
import careerRepository from '@/repository/career.repository';
import projectRepository from '@/repository/project.repository';

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
    staleTime: 1000 * 60,
  }),
  getCareers: () => ({
    queryKey: queryKeys.getCareers(),
    queryFn: () => careerRepository.getMany(),
    staleTime: 1000 * 60
  }),
  getProjects: () => ({
    queryKey: queryKeys.getProjects(),
    queryFn: () => projectRepository.getMany(),
    staleTime: 1000 * 60
  })
};

export default queryOptions;