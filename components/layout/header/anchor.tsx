import Image from 'next/image';
import type { ReactElement } from 'react';
import type { AnchorProps } from './types/anchor';

const Anchor = ({ href, alt, src }: AnchorProps): ReactElement => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferer nooepner">
        <Image
          src={src}
          alt={alt}
          className="w-14 h-14 max-md:w-10 max-md:h-10"
          width={500}
          height={500}
        />
      </a>
    </li>
  );
};

export default Anchor;
