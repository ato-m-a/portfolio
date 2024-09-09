import type { PortfolioSchema } from '@/schema/portfolio.schema';
import { Repository } from './lib';

class PortfolioRepository extends Repository<PortfolioSchema, 'pathname', string> {
  protected resource = 'portfolio';
}

const portfolioRepository = new PortfolioRepository();

export default portfolioRepository;