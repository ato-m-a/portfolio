import { animateIn, animateOut } from '@/common/animation';
import { atom, selector } from 'recoil';

const intersectionObserver = atom({
  key: 'intersectionObserver',
  default: typeof window !== 'undefined' ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (element instanceof HTMLElement) {
        if (entry.isIntersecting) animateIn(element);
      }
    });
  }, { threshold: 0.2 }) : null
});

const disjunctionObserver = atom({
  key: 'disjunctionObserver',
  default: typeof window !== 'undefined' ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (element instanceof HTMLElement) {
        if (!entry.isIntersecting) animateOut(element);
      }
    });
  }, { threshold: 0.15 }) : null
});

export const selectObserver = selector({
  key: 'selectObserver',
  get: ({ get }) => {
    const inObserver = get(intersectionObserver);
    const outObserver = get(disjunctionObserver);

    if (inObserver && outObserver) {
      return [inObserver, outObserver] as const; 
    }
    
    return null;
  }
});