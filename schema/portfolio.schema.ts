import { z } from 'zod';

export type PortfolioSchema = z.infer<typeof portfolioSchema>;

const portfolioSchema = z.object({
  pathname: z.string(),
  pageId: z.string(),
  coverImage: z.string(),
  title: z.string()
});

export default portfolioSchema;