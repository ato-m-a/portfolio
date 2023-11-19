import Image from 'next/image';
import { type ReactElement } from 'react';
import { HeaderProps } from './types/header';

const Header = ({ src, title }: HeaderProps): ReactElement => {
  return (
    <>
      <div className="relative w-full h-1/4 overflow-hidden">
        <Image 
          src={src} 
          alt="header image" 
          className="object-cover w-full h-full" 
          width={2000} 
          height={2000} 
          quality={100} 
          priority={true}
        />
      </div>
      <h1 className="notion-page inline-block font-semibold text-4xl !pt-10 !pb-2 max-md:text-3xl">{title}</h1>
    </>
  )
}

export default Header;