import type { FC } from 'react';
import { TextHighlight } from '@/components/core';
import Image from 'next/image';

// asset
import MyImage from '@/public/images/my-image.webp';

const About: FC = () => {
  return (
    <div className="flex max-md:block justify-between items-center">
      {/** image */}
      <figure className="w-64 h-64 rounded-full bg-gray-300 max-md:mx-auto max-md:mb-4 overflow-hidden">
        <Image src={MyImage} alt="my image" className="w-full h-full object-cover" width={500} height={500} />
      </figure>
      {/** content */}
      <article className="flex flex-col gap-2 text-lg w-3/5 max-md:w-full font-extralight leading-9 max-md:mx-auto break-all">
        <p>
          TypeScript, React(Next.js) 기반의 4년 차 개발자로 소규모 조직에서 B2B 웹 서비스를 개발/배포/운영하였습니다.
          주로 프론트엔드 개발을 담당했으며 필요에 따라 AWS 클라우드 엔지니어링을 겸하였습니다.
          창업 초기 스타트업에 첫 번째 개발자로 합류하여 비대면 서비스 바우처 공급기업 선정 및 50곳 이상의 고객사 확보까지 <TextHighlight>회사의 기술 기반 마련에 기여</TextHighlight>한 경험이 있습니다.
        </p>
        <p>
          고객의 문제를 함께 고민하고 해결함으로써 서비스의 가치를 높이는 데에서 보람을 느낍니다. 
          코드에 애착을 갖기보다 현장의 고객이 겪는 <TextHighlight>문제에 집중</TextHighlight>합니다. 
          최근에는 다양한 환경의 고객이 원활하게 서비스를 이용할 수 있도록 성능 최적화에 주력하고 있습니다.
        </p>
        <p>
          동료를 첫 번째 고객으로 생각하며 <TextHighlight>조직의 업무 효율을 개선</TextHighlight>하는 일을 좋아합니다. 
          루틴 업무를 최소화하기 위한 사전청약 페이지를 간편하게 구축, 관리하는 CMS, 핵심 지표의 정량적 분석을 통해 의사 결정을 지원하는 백오피스를 개발하고 함께 업무 프로세스를 개선해온 경험이 있습니다.
        </p>
        <p>
          프론트엔드 영역이 사용자를 처음 맞이하고 서비스의 첫인상을 책임진다는 부분과 빠르게 변화하는 JavaScript 생태계는 게을러질 틈을 주지 않는다는 점에 큰 매력을 느낍니다.
          이를 바탕으로 더 <TextHighlight>치열하고 즐겁게 몰입</TextHighlight>하며, 더욱 다양한 영역의 문제에 도전하고자 합니다.
        </p>
      </article>
    </div>
  )
}

export default About;