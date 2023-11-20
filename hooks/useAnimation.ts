import { duration } from '@/common/animation';
import { selectObserver } from '@/store/observer';
import { useEffect, type RefObject } from 'react';
import { useRecoilValue } from 'recoil';

/**
 * @param ref observe 할 element
 * @param once 한 번만, 일방적으로(only animateIn) observe할지 여부
 */
export const useAnimation = (ref: RefObject<HTMLElement>, once: boolean = false) => {
  const observers = useRecoilValue(selectObserver);
  const element = ref.current;

  useEffect(() => {
    if (element && observers) {
      observers.forEach(observer => observer.observe(element));

      if (once) {
        observers[0].observe(element);

        // animation의 duration 만큼의 시간이 지나면 unobserve
        const unobserveTimer = setTimeout(() => observers[0].unobserve(element), duration);

        return () => {
          clearTimeout(unobserveTimer);
        }
      } else {
        observers.forEach(observer => observer.observe(element));

        return () => {
          observers.forEach(observer => observer.unobserve(element));
        }
      }
    }
  }, []);
}
