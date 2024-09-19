import type { NextPage } from 'next';
import { HydrationBoundary } from '@tanstack/react-query';
import { ScrollSaver } from '@/components/common';
import { Header, Article } from '@/components/layout';
import { About, Skill, Experience, Project } from '@/components/articles';
import { Navigation } from '@/components/controls';
import { LastUpdated, DebugCache } from '@/components/misc';
import { Emoji } from '@/constants/emoji';
import queryOptions from '@/hooks/query/options';
import getDehydratedQuery from '@/common/getDehydrated';

const MainPage: NextPage = async () => {
  const dehydrated = await getDehydratedQuery([
    queryOptions.getSkills(),
    queryOptions.getCareers(),
    queryOptions.getProjects(),
    queryOptions.getMetadata()
  ]);

  return (
    <HydrationBoundary state={dehydrated}>
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
      <LastUpdated />
      <ScrollSaver />
      <Navigation />
      <DebugCache />
    </HydrationBoundary>
  )
}

export default MainPage;