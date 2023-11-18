import type { Level } from '@/types/common/fixtures';
import type { ReactElement } from 'react';
import Advanced from './advanced';
import Beginner from './beginner';
import Expert from './expert';
import Intermediate from './intermediate';

const getComponent = (level: Level): () => ReactElement => {
  const components = {
    Beginner,
    Intermediate,
    Advanced,
    Expert
  };

  return components[level];
}

export default getComponent;