import type { CareerSchema } from '@/schema/career.schema';
import { Repository } from './lib';

class CareerRepository extends Repository<CareerSchema, 'id'> {
  protected resource = 'career';
}

const careerRepository = new CareerRepository();

export default careerRepository;