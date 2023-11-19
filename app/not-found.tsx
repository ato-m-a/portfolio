"use client";

import { useAnimation } from '@/hooks/useAnimation';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard'
});

const dejavuSansMono = localFont({
  src: '../public/fonts/DejavuSansMono.woff2',
  display: 'swap',
  variable: '--font-dejavu-sans-mono'
});

export default function NotFound() {
  const { name } = useParams();
  const figureRef = useRef<HTMLElement>(null);
  useAnimation(figureRef, true);

  return (
    <figure className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center max-md:px-10" ref={figureRef}>
      <div className="w-100 h-100 rounded-xl overflow-hidden shadow-xl border border-gray-300">
        <Image src="/images/not-found.webp" alt="404" className="w-full h-full" width={500} height={500} priority={true} />
      </div>
      <figcaption className="pt-10 flex flex-col justify-center items-center">
        <h1 className={`${dejavuSansMono.className} font-semibold text-9xl text-blue-500 py-4`}>404</h1>
        <h2 className={`${pretendard.className} font-normal py-2 text-2xl text-gray-700`}>
          😢&nbsp;
          {
            name
            ? <span className="underline text-gray-500">&quot;{decodeURI(name as string)}&quot;</span>
            : '이런!'
          }
          &nbsp;페이지를 찾지 못했어요!
        </h2>
        <p className={`${pretendard.className} font-normal text-xl text-gray-700`}>
          경험을 더 쌓아서, 이 이야기도 들려드릴 수 있도록 할게요. 조금만 기다려주세요!
        </p>
        <Link href="/" className={`${pretendard.className} hv-btn rounded-lg shadow-lg mt-6 px-8 py-3 bg-blue-500 text-white text-xl cursor-pointer transition-opacity ease-in-out`}>
          돌아가기
        </Link>
      </figcaption>
    </figure>
  )
}