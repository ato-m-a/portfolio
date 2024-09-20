import { z } from 'zod';

export type CompanySchema = z.infer<typeof companySchema>;

const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string().nullable(),
  address: z.string(),
  description: z.string(),
  updatedAt: z.string()
});

export default companySchema;