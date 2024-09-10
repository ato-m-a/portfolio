# 웹 프론트엔드 개발자 홍준혁의 웹 포트폴리오 입니다.

![image](https://github.com/ato-m-a/portfolio/assets/99224451/8e33f393-a346-4182-bf04-b25e1660da99)

## 개발 환경

- Language: `TypeScript`
- OS: `MacOS(M1, ARM64) Sonoma` 14.1.1
- Runtime: `Node.js` v20.16.0
- Package Manager: `npm` v10.2.1
- Framework: `Next.js` v14.0.3
- State Management: `Jotai` v2.9.3^

## 목차

- [About Me](#About-Me)
- [Skills](#Skills)
- [Experience](#Experience)
- [주요 구현 사항](#주요-구현-사항)
- [개발 중 이슈](#개발-중-이슈)

## About Me

TypeScript, React(Next.js) 기반의 4년 차 개발자로 소규모 조직에서 B2B 웹 서비스를 개발/배포/운영하였습니다. 주로 프론트엔드 개발을 담당했으며 필요에 따라 AWS 클라우드 엔지니어링을 겸하였습니다. 창업 초기 스타트업에 첫 번째 개발자로 합류하여 비대면 서비스 바우처 공급기업 선정 및 50곳 이상의 고객사 확보까지 회사의 기술 기반 마련에 기여한 경험이 있습니다.

고객의 문제를 함께 고민하고 해결함으로써 서비스의 가치를 높이는 데에서 보람을 느낍니다. 코드에 애착을 갖기보다 현장의 고객이 겪는 문제에 집중합니다. 최근에는 다양한 환경의 고객이 원활하게 서비스를 이용할 수 있도록 성능 최적화에 주력하고 있습니다.

동료를 첫 번째 고객으로 생각하며 조직의 업무 효율을 개선하는 일을 좋아합니다. 루틴 업무를 최소화하기 위한 사전청약 페이지를 간편하게 구축, 관리하는 CMS, 핵심 지표의 정량적 분석을 통해 의사 결정을 지원하는 백오피스를 개발하고 함께 업무 프로세스를 개선해온 경험이 있습니다.

프론트엔드 영역이 사용자를 처음 맞이하고 서비스의 첫인상을 책임진다는 부분과 빠르게 변화하는 JavaScript 생태계는 게을러질 틈을 주지 않는다는 점에 큰 매력을 느낍니다. 이를 바탕으로 더 치열하고 즐겁게 몰입하며, 더욱 다양한 영역의 문제에 도전하고자 합니다.

## Skills

- 이 이력서에는...
	- Frontend: `Next.js v14.0.3`
	- 상태관리: `Jotai`

- Language
  - `JavaScript(ES6+)`, `TypeScript`

- Libraries & Frameworks
  - `React.js`, `Next.js`, `Vue.js`,
	- `NestJS`

- State Management
	- `Recoil`, `Jotai`
	- `Redux(Toolkit)`
	- `TanStack Query`

- Styling
	- `Tailwind CSS`
	- `Emotion`, `styled-components`

- Infrastructure
	- `Amazon AWS`, `Microsoft Azure`

- Tools
	- `Yarn (Berry)`
	- `Vite`
	- `Git`
	- `Figma`

## Experience

### [(주)트라이포드랩](https://earlivery.com/) (2024.01 ~ 현재, 재직중)
- `Next.js` 기반 기존 비즈니스의 프론트엔드 운영 및 유지보수
	- `i18next` 기반 베트남 현지화 개발
	- 마이페이지, 구독 및 결제 정보 Screen 개발 및 PG 위젯 연동 등 신규 개발
- Earlivery 문서 관리 서비스 리팩터링
	- 상태 관리 최적화, 메모이제이션을 통한 성능 개선
	- API 요청 관리 체계를 개선해 비동기 데이터 처리 효율성 향상
	- 요청 및 응답 데이터의 타입 일관성 강화
- Earlivery 스마트 저울 서비스 통합
	- 리포지토리 패턴 및 어댑터 패턴을 통해 레거시 서비스와의 기능 호환성 확보
	- 기존 서비스에 맞추어 반응형 구현 및 디자인 시스템을 바탕으로 UI 개선
	- 개발을 적시에 완료하여 연 매출 280억+ 신선식품 F&B 기업과 대형 제약바이오사에 성공적으로 서비스를 도입하고, PoC 진행에 기여
- 프로덕트 디자이너와 협업하여 디자인 시스템 구축, `Storybook`을 사용한 문서화 및 UI의 매뉴얼 테스트 수행

### [(주)하이브미디어](http://hivemedia.co.kr/) (2022.04 ~ 2023.06, 1년 3개월)
- `Next.js` 기반 CRM SaaS의 개발, 운영 및 유지보수
	- 테넌트별 동적 라우팅을 통한 CRM 대시보드 및 데이터 수집을 위한 공개 API 개발
	- 외주 개발 의존을 제거해 건별 15만 원 수준의 외주 비용 절감
	- 재직 기간 중 대형 생활용품 제조사, 지방자치단체 및 공공기관 등을 대상으로 100건 이상의 서비스 제공
- 기존 비즈니스 레거시 청산 및 운영, 유지보수
	- PHP 5.6 기반의 레거시 청산 및 `Next.js` 기반으로 마이그레이션
	- 호스팅 서비스에서 `Amazon AWS` 기반으로 인프라 마이그레이션, 월 60만 원 수준의 비용 지출을 10만 원 수준으로 절감
- 사전청약 페이지 관리 CMS, 마케팅 핵심 지표 분석 시스템 및 광고 매체비 정산 시스템 등의 백오피스 웹 어플리케이션 개발
	- 웹 퍼블리셔 및 디자이너의 주간 루틴 업무 시간을 평균 3.5시간 절감
	- 기존 대비 150% 수준의 사전청약 페이지 제공에 기여

### [(주)히어로웍스](https://www.heroworks.co.kr) (2021.05 ~ 2022.03, 11개월)
- 첫 번째 개발자로 합류하여 회사의 기술 기반 전반 마련에 기여
	- 일 평균 70,000건 이상의 객실 가격 및 리뷰 데이터 스크래핑 자동화 시스템 구축으로 비대면 서비스 바우처 공급기업 선정에 기여
	- `Amazon AWS` 인프라 엔지니어링 (`CloudFront`, `ECS`, `Batch` 및 IAM 관리)
	- 개발 조직의 기술력 향상을 위해 프론트엔드 엔지니어링 및 `Amazon AWS` 사내 교육 진행
- `Vue.js` 기반 호텔 Channel Management System(CMS) 프론트엔드 개발
- 재직 기간 중 PL로서 기획에 참여하며 UI 디자인, 개발 스프린트 및 리소스 관리 등을 함께 수행

## 주요 구현 사항

1. Recoil을 사용한 상태관리
	- [Recoil](https://github.com/facebookexperimental/Recoil)을 사용하여 `Accordion` 컴포넌트 및 `스크롤 위치(offsetY)` 상태관리를 구현하였습니다.
	- [Jotai](https://github.com/pmndrs/jotai)를 사용해 `Accordion` 컴포넌트 전역 상태 관리를 다시 구현하고, 유틸 API인 `atomFamily`를 사용해 여러 개의 컴포넌트를 별도 관리할 수 있도록 하였습니다.
	- 또한, `IntersectionObserver` API를 사용할 때 `Jotai`를 사용해 전역적으로 객체를 하나씩만 생성하도록 구현하였습니다.

2. 포트폴리오 상세 페이지는 ![Notion](https://img.shields.io/badge/Notion-black?logo=Notion) 페이지를 보여드리도록 구현했습니다.
	- [notion-client](https://www.npmjs.com/package/notion-client) API를 사용해 노션 페이지의 데이터를 가져왔습니다.
	- 응답받은 `recordMap`을 [react-notion-x](https://www.npmjs.com/package/react-notion-x)의 `NotionRenderer` 컴포넌트에 넘겨주어 렌더링합니다.

3. 간단한 백엔드를 구성하였습니다.
	- 내용 수정이 있을 때마다 빌드를 다시 해야하는 불편함을 해소하기 위해 `Prisma`를 사용한 데이터베이스 관리(`vercel/postgres`)와 함께 `Next.js`의 API 라우팅을 사용해 백엔드를 구성하였습니다.
	- 이와 함께 루트 페이지, 포트폴리오 페이지에 서버 사이드 렌더링(다이나믹 라우팅)을 적용하였습니다.
		- 루트 페이지의 경우 별도의 param 사용이나 `fetch` 사용 없이 `TanStack Query`의 Hydration을 통해 서버 사이드와 데이터를 동기화함으로, 빌드 당시의 데이터만 사용하는 정적 페이지로만 빌드되어 `export const dynamic = 'force-dynamic'` 을 통해 다이나믹 라우팅을 적용하였습니다.
	

## 개발 중 이슈

1. Notion API를 사용한 포트폴리오 상세 페이지의 로딩 시간이 너무 오래 걸리는 문제가 있었습니다.
	- [React](https://github.com/facebook/react) 기반 CSR에서, [Next.js](https://github.com/vercel/next.js) 기반 SSR로 이전하였습니다.

2. 포트폴리오 상세 페이지 이동 후, 뒤로가기 시 스크롤 위치가 제멋대로인 현상이 발생했습니다.
	- `next/navigation` 의 `usePathname` 를 사용해 페이지에 따라 다른 `scrollTo` 메소드를 호출하도록 했습니다.
	- `sessionStorage` 를 통해 루트 경로의 `window.scrollY` 상태를 저장하도록 구현했습니다.
	- 아직 불안정한 것 같습니다. `next/router` 의 `router.events` 를 대체할 수 있는 더 좋은 방법을 찾아보겠습니다.