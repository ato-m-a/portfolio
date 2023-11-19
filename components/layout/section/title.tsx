import type { ReactFC } from '@/types/components/fc';

const Title: ReactFC = ({ children }) => {
  return <h3 className="text-3xl text-center mb-2 font-semibold">{children}</h3>
}

export default Title;