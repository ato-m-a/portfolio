"use client";

import { useQuery, useQueries } from '@tanstack/react-query';
import queryOptions from './options';

export const useSkills = () => useQuery(queryOptions.getSkills());
export const useCareers = () => useQuery(queryOptions.getCareers());
export const useProjects = () => useQuery(queryOptions.getProjects());
export const useMetadata = () => useQueries(queryOptions.getMetadata());