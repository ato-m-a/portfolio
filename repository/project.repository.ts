import type { ProjectSchema } from '@/schema/project.schema';
import { Repository } from './lib';

class ProjectRepository extends Repository<ProjectSchema> {
  protected resource = 'project';
}

const projectRepository = new ProjectRepository();

export default projectRepository;