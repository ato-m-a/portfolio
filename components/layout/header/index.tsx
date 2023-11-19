import type { ReactElement } from 'react';
import Anchor from './anchor';
import Wrapper from './wrapper';

const Header = (): ReactElement => {
  return (
    <Wrapper>
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <h1 className="text-5xl text-primary font-normal font-pretendard py-1 max-lg:text-3xl max-md:text-2xl">홍준혁</h1>
          <h2 className="text-2xl font-thin font-pretendard text-primary max-lg:text-xl max-md:text-lg">몰입해서 더 즐거운 개발자</h2>
        </div>
        <nav className="flex-1 flex justify-end">
          <ul className="h-full flex items-center space-x-4">
            <Anchor href="https://github.com/ato-m-a" src="/images/github.svg" alt="github logo" />
            <Anchor href="https://www.linkedin.com/in/hongjunhyuk" src="/images/linkedin.webp" alt="linkedin image" />
            <Anchor href="mailto:atomjh0295@gmail.com" src="/images/gmail.webp" alt="gmail image" />
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

export default Header;