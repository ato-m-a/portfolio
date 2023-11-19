import { duration } from '@/common/animation';
import { selectObserver } from '@/store/observer';
import { useEffect, type RefObject } from 'react';
import { useRecoilValue } from 'recoil';

export const useAnimation = (ref: RefObject<HTMLElement>, once: boolean = false) => {
  const observers = useRecoilValue(selectObserver);

  useEffect(() => {
    const element = ref.current;

    if (element && observers) {
      observers.forEach(observer => observer.observe(element));

      if (once) {
        // animation의 duration 만큼의 시간이 지나면 unobserve
        const unobserveTimer = setTimeout(() => {
          observers.forEach(observer => observer.unobserve(element));
        }, duration);

        return () => {
          clearTimeout(unobserveTimer);
        }
      }
    }

    return () => {
      if (element && observers) observers.forEach(observer => observer.unobserve(element));
    };
  }, []);
}
