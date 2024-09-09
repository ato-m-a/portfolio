import type { SkillSchema } from '@/schema/skill.schema';
import { Repository } from './lib';

class SkillRepository extends Repository<SkillSchema, 'id'> {
  protected resource = 'skill';
}

const skillRepository = new SkillRepository();

export default skillRepository;