"use client";

import type { AppRouter } from '@/server/trpc/router/_app';
import { createTRPCReact } from '@trpc/react-query';

export type TrpcClient = ReturnType<typeof createTRPCReact>;

export const trpc = createTRPCReact<AppRouter>();