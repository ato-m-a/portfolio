import type { ReactFC } from '@/types/components/fc';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <ul className="w-full">
      {children}
    </ul>
  )
}

export default Wrapper;