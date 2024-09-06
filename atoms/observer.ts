import { animateIn, animateOut } from '@/common/animation';
import { atom } from 'jotai';

const intersectionObserver = atom<IntersectionObserver | null>(
  typeof window !== 'undefined' ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (element instanceof HTMLElement) {
        if (entry.isIntersecting) animateIn(element);
      }
    });
  }, { threshold: 0.2 }) : null
);

const disjunctionObserver = atom<IntersectionObserver | null>(
  typeof window !== 'undefined' ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (element instanceof HTMLElement) {
        if (!entry.isIntersecting) animateOut(element);
      }
    });
  }, { threshold: 0.15 }) : null
);

export const selectObserver = atom<IntersectionObserver[] | null>((get) => {
  if (typeof window !== 'undefined') {
    const inObserver = get(intersectionObserver);
    const outObserver = get(disjunctionObserver);

    if (inObserver && outObserver) {
      return [inObserver, outObserver] as const;
    }
  }

  return null;
});