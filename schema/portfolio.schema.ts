import { z } from 'zod';

export type PortfolioSchema = z.infer<typeof portfolioSchema>;

const portfolioSchema = z.object({
  id: z.number(),
  pathname: z.string(),
  pageId: z.string(),
  coverImage: z.string(),
  title: z.string(),
  updatedAt: z.string()
});

export default portfolioSchema;