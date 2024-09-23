import type { NextPage } from 'next';
import { Comment, Figure } from '@/components/articles/not-found';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

const dejavuSansMono = localFont({
  src: '../public/fonts/DejavuSansMono.woff2',
  display: 'swap',
  variable: '--font-dejavu-sans-mono'
});

const NotFound: NextPage = () => {
  return (
    <Figure>
      <div className="w-80 h-80 rounded-xl overflow-hidden shadow-xl border border-gray-300 max-sm:w-full max-sm:h-full">
        <Image src="/images/not-found.webp" alt="404" className="w-full h-full" width={500} height={500} priority={true} />
      </div>
      <figcaption className="pt-10 flex flex-col justify-center items-center">
        <h1 className={`${dejavuSansMono.className} font-semibold text-9xl text-blue-500 py-4`}>404</h1>
        <Comment className="font-normal py-2 text-2xl text-gray-700" />
        <p className="font-normal text-xl text-gray-700 text-center break-keep">
          경험을 더 쌓아서, 이 이야기도 들려드릴 수 있도록 할게요. 조금만 기다려주세요!
        </p>
        <Link href="/" className="hv-btn rounded-lg shadow-lg mt-6 px-8 py-3 bg-blue-500 text-white text-xl cursor-pointer transition-opacity ease-in-out">
          돌아가기
        </Link>
      </figcaption>
    </Figure>
  )
};

export default NotFound;