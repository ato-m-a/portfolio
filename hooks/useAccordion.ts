import { accordionState } from '@/store/accordion';
import { useRecoilState } from 'recoil';

/**
 * @description accordion component의 열리고 닫힘 상태를 관리하는 hook
 * @param key {symbol} 각 accordion의 고유한 key
 */
export const useAccordion = (key: symbol) => {
  const [activeItem, setActiveItem] = useRecoilState(accordionState);

  const isActivate = activeItem === key;

  const toggleAccordion = () => {
    if (activeItem === key) setActiveItem(null);
    else setActiveItem(key);
  }

  return [isActivate, toggleAccordion] as const;
}