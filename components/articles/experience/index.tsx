import type { FC } from 'react';
import type { CareerFixtureSchema } from '@/schema/career.schema';
import FixtureRepository from '@/common/repository';
import ExperienceContent from './content';

const Experience: FC = () => {
  const careerFixture = FixtureRepository.get<CareerFixtureSchema>('career');

  return (
    <ul className="flex flex-col">
      {careerFixture.map((career) => <ExperienceContent key={career.company} {...career} />)}
    </ul>
  )
}

export default Experience;