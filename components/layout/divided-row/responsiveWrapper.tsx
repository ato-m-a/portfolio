import type { ReactFC } from '@/types/components/fc';

const ResponsiveWrapper: ReactFC = ({ children }) => {
  return (
    <div className="flex max-lg:flex-col">
      {children}
    </div>
  )
}

export default ResponsiveWrapper;