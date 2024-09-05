import { useAtom } from 'jotai';
import accordionFamily from '@/atoms/accordion';

/**
 * @description accordion component의 열리고 닫힘 상태를 관리하는 hook
 * @param key {symbol} 각 accordion의 고유한 key
 */
const useAccordion = (key: symbol) => {
  const [isActive, setIsActive] = useAtom(accordionFamily(key));
  const toggle = () => setIsActive((prev) => !prev);

  return { isActive, toggle } as const;
}

export default useAccordion;