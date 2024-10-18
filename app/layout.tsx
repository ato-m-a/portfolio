import type { LayoutProps } from '@/types/components/layout';
import type { Metadata } from 'next';
import { AtomProvider, QueryProvider } from '@/components/providers';
import localFont from 'next/font/local';
import Script from 'next/script';

import '@/styles/globals.css';

export const revalidate = 60;

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ato-m-a.me'),
  description: '주니어 웹 프론트엔드 개발자 홍준혁입니다. 찾아주셔서 감사합니다!',
  title: '홍준혁 | 웹 프론트엔드 개발자',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: '홍준혁 | 웹 프론트엔드 개발자',
    url: 'https://ato-m-a.me',
    description: '주니어 웹 프론트엔드 개발자 홍준혁입니다. 찾아주셔서 감사합니다!',
    locale: 'ko_KR',
    siteName: '홍준혁 | 웹 프론트엔드 개발자',
    images: {
      url: '/images/og-image.webp',
      width: 1080,
      height: 1080,
      alt: '홍준혁 | 웹 프론트엔드 개발자',
    },
  },
  twitter: {
    card: 'summary',
    site: '@ato_m_a',
    title: '홍준혁 | 웹 프론트엔드 개발자',
    description: '주니어 웹 프론트엔드 개발자 홍준혁입니다. 찾아주셔서 감사합니다!',
    images: {
      url: '/images/og-image.webp',
      width: 1080,
      height: 1080,
      alt: '홍준혁 | 웹 프론트엔드 개발자',
    },
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta rel="canonical" content="https://ato-m-a.me" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3TRJTFPNMB" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3TRJTFPNMB');
          `}
        </Script>
      </head>
      <body className={`bg-gray-100 ${pretendard.className}`}>
        <AtomProvider>
          <QueryProvider>{children}</QueryProvider>
        </AtomProvider>
      </body>
    </html>
  );
}
