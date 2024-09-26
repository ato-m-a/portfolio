"use client";

import type { AppRouter } from '@/server/trpc/router/_app';
import { createTRPCReact } from '@trpc/react-query';

const trpc = createTRPCReact<AppRouter>();

export default trpc;