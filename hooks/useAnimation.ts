import { duration } from '@/common/animation';
import { selectObserver } from '@/atoms/observer';
import { useEffect, type RefObject } from 'react';
import { useAtomValue } from 'jotai';

/**
 * @param ref observe 할 element
 * @param once 한 번만 observe 할지 여부
 */
const useAnimation = (
  ref: RefObject<HTMLElement>,
  once: boolean = false,
  last: boolean = false,
) => {
  const observers = useAtomValue(selectObserver);

  useEffect(() => {
    if (ref.current && observers) {
      const element = ref.current;

      observers.forEach((observer) => observer.observe(element));

      if (once) {
        const timer = setTimeout(
          () => observers.forEach((observer) => observer.unobserve(element)),
          duration / 2,
        );
        return () => clearTimeout(timer);
      }

      return () => observers.forEach((observer) => observer.unobserve(element));
    }
  }, [ref, observers, once]);
};

export default useAnimation;
