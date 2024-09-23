import { createCaller } from '@/server/trpc/router/_app';
import createContext from '@/server/trpc/context';

export const trpc = createCaller(createContext());