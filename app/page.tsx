import { FixtureRepository } from '@/common/repository';
import { Emoji, Floating, RemoteControl, Section, TextHighlight } from '@/components/layout';
import Header from '@/components/layout/header';
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
              Node.js, AWS 기반의 3년 차 웹 개발자로 소규모 조직에서 서비스의 개발 주기 전반에 걸쳐 주도적으로 업무를 진행해왔습니다. 창업 초기 단계의 스타트업에서 처음부터 구축에 참여하며
              <TextHighlight>서비스의 초기 설계부터 개발, 운영</TextHighlight>까지 경험하며 회사의 기술 기반 마련에 기여한 경험이 있습니다.
            </p>
            <p className="mb-2">
              동료들의 <TextHighlight>업무 효율을 개선하는 일</TextHighlight>을 좋아합니다. 마케팅 에이전시에 재직하며 Server-Driven UI를 바탕으로 한
              간편 구축 시스템 개발을 통해 웹 퍼블리셔와 디자이너의 주간 루틴 업무 시간을 평균 3.5시간 단축시켰으며, 기존 대비 50% 더 많은 사전청약 페이지를 제공할 수
              있도록 기여한 경험이 있습니다.
            </p>
            <p className="mb-2">
              팀과 회사 차원의 임팩트에 집중하며 주도적으로 개발합니다. 개별 제작하던 웹 이벤트의 외주 개발 비용 및 인프라 운영, 관리의 일관성 확보를 위해 CRM 대시보드를 <TextHighlight>SaaS로 전환</TextHighlight>하여
              건당 10만 원에서 15만 원 수준의 외주 비용 지출을 없애고 중앙 집중형 관리 체계를 마련한 경험이 있습니다.
            </p>
            <p>
              개인이 하고 싶은 프론트엔드 개발 보다는 <TextHighlight>회사 차원</TextHighlight>에서 도움이 되는 개발을 수행해야 한다는 생각으로 Node.js 기반의
              풀스택 개발자로 일해왔습니다. 지난 2년간 개발을 해오며, 프론트엔드 영역이 고객을 처음 맞이하고 서비스의 첫인상을 책임진다는 부분에 매력을 느껴 더 깊이 관여하고자 합니다.
            </p>
          </About.content>
        </About.wrapper>
      </Section.wrapper>
      {/* skills */}
      <Section.wrapper id="skills">
        <Section.header>
          <Section.title><Emoji.skill /> Skills</Section.title>
          <Section.subtitle>업무에 사용 중이거나, 사용 경험이 있는 기술들이에요 !</Section.subtitle>
          <Section.subtitle>
            <span className="bg-blue-600 text-white px-2 py-1 text-sm rounded mr-2">Beginner - 1</span>
            <span className="bg-green-600 text-white px-2 py-1 text-sm rounded mr-2">Intermediate - 2</span>
            <span className="bg-orange-600 text-white px-2 py-1 text-sm rounded mr-2">Advanced - 3</span>
            <span className="bg-red-600 text-white px-2 py-1 text-sm rounded">Expert - 4</span>
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
      <Floating.wrapper className="font-pretendard font-thin p-2 bottom-2 left-2 max-md:text-sm">
        <p>2023년 11월 19일 업데이트</p>
      </Floating.wrapper>
      <RemoteControl />
    </>
  )
}
