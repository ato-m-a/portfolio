"use client";

import { useScroll } from '@/hooks/useScroll';
import Image from 'next/image';
import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  const scrolled = useScroll(100);

  return (
    <header className={`${scrolled ? 'head-down' : ''} fixed w-full py-12 bg-gray-100 z-50 max-lg:py-8 max-md:py-6`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <h1 className="text-5xl text-primary font-normal font-pretendard py-1 max-lg:text-3xl max-md:text-2xl">홍준혁</h1>
          <h2 className="text-2xl font-thin font-pretendard text-primary max-lg:text-xl max-md:text-lg">몰입해서 더 즐거운 개발자</h2>
        </div>
        <nav className="flex-1 flex justify-end">
          <ul className="h-full flex items-center space-x-4">
            <li>
              <a href="https://github.com/ato-m-a" target="_blank" rel="noreferer noopener">
                <Image src="/images/github.svg" alt="github logo" className="w-14 h-14 max-md:w-10 max-md:h-10" width={500} height={500} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hongjunhyuk" target="_blank" rel="noreferer noopener">
                <Image src="/images/linkedin.webp" alt="linkedin image" className="w-14 h-14 max-md:w-10 max-md:h-10" width={500} height={500} />
              </a>
            </li>
            <li>
              <a href="mailto:atomjh0295@gmail.com">
                <Image src="/images/gmail.webp" alt="gmail image" className="w-14 h-14 max-md:w-10 max-md:h-10" width={500} height={500} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;