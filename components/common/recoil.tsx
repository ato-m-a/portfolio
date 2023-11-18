"use client";

import type { ReactFC } from '@/types/components/fc';
import { RecoilRoot } from 'recoil';

const Recoil: ReactFC = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export default Recoil;