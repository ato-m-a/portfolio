import type { ReactFC } from '@/types/components/fc';

const Subtitle: ReactFC = ({ children, className }) => {
  return <p className={`text-xl text-center font-pretendard ${className ?? ''}`}>{children}</p>;
}

export default Subtitle;