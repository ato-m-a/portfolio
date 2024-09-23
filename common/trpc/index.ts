import { trpc as s } from './server';
import { trpc as c } from './client';

const trpc = typeof window === 'undefined' ? s : c;

export default trpc;