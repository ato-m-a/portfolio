import type { ReactFC } from '@/types/components/fc';

const Wrapper: ReactFC = ({ children, className }) => {
  return (
    <div className={`fixed ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper;