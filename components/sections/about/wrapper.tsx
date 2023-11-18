import type { ReactFC } from '@/types/components/fc';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <div className="flex max-md:block justify-between items-center">
      {children}
    </div>
  )
}

export default Wrapper;