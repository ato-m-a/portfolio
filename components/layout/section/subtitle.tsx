import type { ReactFC } from '@/types/components/fc';

const Subtitle: ReactFC = ({ children, className }) => {
  return <div className={`text-xl text-center ${className ?? ''}`}>{children}</div>;
}

export default Subtitle;