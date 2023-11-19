import type { ReactFC } from '@/types/components/fc';

const Content: ReactFC = ({ children }) => {
  return (
    <div className="text-lg w-3/5 max-md:w-full font-extralight leading-9 max-md:mx-auto break-keep">
      {children}
    </div>
  )
}

export default Content;