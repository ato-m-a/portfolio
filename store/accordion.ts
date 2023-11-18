import { atom } from 'recoil';

export const accordionState = atom<symbol | null>({
  key: 'accordionState',
  default: null
});