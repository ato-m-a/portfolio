import { FixtureRepository } from '@/common/repository';
import { ScrollSaver } from '@/components/common';
import { Emoji, Floating, Header, RemoteControl, Section, TextHighlight } from '@/components/layout';
import { About, Experience, Project, Skills } from '@/components/sections';
import type { Career, Project as Projects, Skill } from '@/types/common/fixtures';

export default function Home() {
  const careers = FixtureRepository.get<Career>('career');
  const skills = FixtureRepository.get<Skill>('skills');
  const projects = FixtureRepository.get<Projects>('project');

  return (
    <>
      <Header />
      {/* About Me */}
      <Section.wrapper className="pt-80 max-md:pt-40" id="about">
        <Section.header>
          <Section.title><Emoji.hello /> About Me</Section.title>
          <Section.subtitle>저를 소개해 드릴게요 !</Section.subtitle>
        </Section.header>
        <About.wrapper>
          <About.image />
          <About.content>
            <p className="mb-2">
              TypeScript, React(Next.js) 기반의 3년 차 개발자로 소규모 조직에서 서비스의 개발 주기 전반에 걸쳐 주도적으로 업무를 진행해왔습니다.
              창업 초기 스타트업에 첫 번째 개발자로 합류하여 PMS 제공사와 MOU 체결 및 비대면 서비스 바우처 공급기업 선정까지 <TextHighlight>회사의 기술 기반 마련</TextHighlight>에 힘 쓴 경험이 있습니다.
            </p>
            <p className="mb-2">
              동료들의 <TextHighlight>업무 효율을 개선하는 일</TextHighlight>을 좋아합니다. Server-Driven UI를 바탕으로 한 간편 구축 시스템
              개발을 통해 웹 퍼블리셔와 디자이너의 주간 루틴 업무 시간을 평균 3.5시간 단축시키고, 기존 대비 150% 수준의 사전청약 페이지를 제공할 수 있도록 개선한 경험이 있습니다.
            </p>
            <p className="mb-2">
              코드에 대한 애착보다 <TextHighlight>더 좋은 서비스에 집중</TextHighlight>합니다. 서비스 개선을 위해 고객사와의 미팅, 사용자 행동 데이터 및 전환율의 정량적 분석을 주도적으로 수행하였으며,
              기획 및 현장 영업 부서 등 다양한 직무의 동료들과 능동적으로 커뮤니케이션하며 협업해왔습니다.
            </p>
            <p>
              개인으로서 하고 싶은 프론트엔드 개발 보다는 <TextHighlight>비즈니스 임팩트</TextHighlight>에 우선한 개발을 수행해야 한다는 생각으로 Node.js 기반의
              풀스택 개발자로 일해왔습니다. 지난 2년간 개발을 해오며, 프론트엔드 영역이 사용자를 처음 맞이하고 서비스의 첫인상을 책임진다는 부분에 매력을 느껴 더 깊이 관여하고자 합니다.
            </p>
          </About.content>
        </About.wrapper>
      </Section.wrapper>
      {/* skills */}
      <Section.wrapper id="skills">
        <Section.header>
          <Section.title><Emoji.skill /> Skills</Section.title>
          <Section.subtitle>업무에 사용 중이거나, 사용 경험이 있는 기술들이에요 !</Section.subtitle>
          <Section.subtitle className="pt-2">
            <div className="flex max-md:flex-col justify-center max-md:items-center">
              <div className="max-md:mb-2 max-md:w-full">
                <span className="bg-blue-600 text-white px-2 py-1 text-sm rounded mr-2">Beginner - 1</span>
                <span className="bg-green-600 text-white px-2 py-1 text-sm rounded mr-2">Intermediate - 2</span>
              </div>
              <div className="max-md:px-16 max-md:w-full">
                <span className="bg-orange-600 text-white px-2 py-1 text-sm rounded mr-2">Advanced - 3</span>
                <span className="bg-red-600 text-white px-2 py-1 text-sm rounded">Expert - 4</span>
              </div>
            </div>
          </Section.subtitle>
        </Section.header>
        <Skills.wrapper>
          {
            skills.map((skill, index) => (
              <Skills.content key={`skill-${index}`} id={skill.id} bullets={skill.bullets}>
                <Skills.title id={skill.id} level={skill.level} icon={skill.icon} />
              </Skills.content>
            ))
          }
        </Skills.wrapper>
      </Section.wrapper>
      {/* Experience */}
      <Section.wrapper id="experience">
        <Section.header>
          <Section.title><Emoji.experience /> Experience</Section.title>
          <Section.subtitle>제가 쌓아온 경험들을 보여드릴게요 !</Section.subtitle>
        </Section.header>
        <Experience.wrapper>
          {
            careers.map((career, index) => (
              <Experience.content key={`career-${index}`} {...career} />
            ))
          }
        </Experience.wrapper>
      </Section.wrapper>
      {/* Project */}
      <Section.wrapper id="project">
        <Section.header>
          <Section.title><Emoji.project /> Project</Section.title>
          <Section.subtitle>지금까지 이런 프로젝트를 해왔어요 !</Section.subtitle>
        </Section.header>
        <Project.wrapper>
          {
            projects.map((project, index) => (
              <Project.content key={`project-${index}`} {...project} />
            ))
          }
        </Project.wrapper>
      </Section.wrapper>
      <Floating.wrapper className="font-thin p-2 bottom-2 left-2 max-md:text-sm">
        <p>2023년 12월 5일 업데이트</p>
      </Floating.wrapper>
      <ScrollSaver />
      <RemoteControl />
    </>
  )
}
