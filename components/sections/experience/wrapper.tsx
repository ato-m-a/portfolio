import type { ReactFC } from '@/types/components/fc';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <ul className="flex flex-col font-pretendard">
      {children}
    </ul>
  )
}

export default Wrapper;