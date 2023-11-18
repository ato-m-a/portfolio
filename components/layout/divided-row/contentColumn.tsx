import type { ReactFC } from '@/types/components/fc';

const ContentColumn: ReactFC = ({ children, className }) => {
  return (
    <div className={`flex flex-col flex-1 ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default ContentColumn;