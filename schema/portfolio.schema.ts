import { z } from 'zod';

export type PortfolioFixtureSchema = z.infer<typeof portfolioFixtureSchema>;

const portfolioFixtureSchema = z.object({
  name: z.string(),
  page_id: z.string(),
  cover_image: z.string(),
  title: z.string()
});

export default portfolioFixtureSchema;