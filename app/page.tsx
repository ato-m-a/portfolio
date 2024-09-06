import type { NextPage } from 'next';
import { ScrollSaver } from '@/components/common';
import { Header, Article } from '@/components/layout';
import { About, Skill, Experience, Project } from '@/components/articles';
import { Navigation } from '@/components/controls';
import { Emoji } from '@/constants/emoji';

const MainPage: NextPage = () => {
  return (
    <>
      <Header />
      <main className="pt-80 max-md:pt-40">
        <Article
          id="about"
          title={`${Emoji.hello} About Me`}
          subtitle="저를 소개해 드릴게요 !"
          content={<About />}
        />
        <Article 
          id="skill"
          title={`${Emoji.star} Skill`}
          subtitle="업무에 사용 중이거나, 사용 경험이 있는 기술들이에요 !"
          content={<Skill />}
        />
        <Article 
          id="experience"
          title={`${Emoji.briefcase} Experience`}
          subtitle="제가 쌓아온 경험들을 보여드릴게요 !"
          content={<Experience />}
        />
        <Article 
          id="project"
          title={`${Emoji.rocket} Project`}
          subtitle="지금까지 이런 프로젝트를 해왔어요 !"
          content={<Project />}
        />
      </main>
      {/** last updated */}
      <div className="fixed font-thin p-2 bottom-2 left-2 max-md:text-sm">
        <p>2023년 12월 29일 업데이트</p>
      </div>
      <ScrollSaver />
      <Navigation />
    </>
  )
}

export default MainPage;