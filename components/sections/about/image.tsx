import Image from 'next/image';
import type { ReactElement } from 'react';

const ImageSection = (): ReactElement => {
  return (
    <div className="w-64 h-64 rounded-full bg-gray-300 max-md:mx-auto max-md:mb-4 overflow-hidden">
      <Image src="/images/my-image.webp" alt="my photo" className="w-full h-full object-cover" width={500} height={500} />
    </div>
  )
}

export default ImageSection;