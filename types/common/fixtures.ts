export interface Bullet {
  outer: string;
  inner?: string[];
}

export interface Career {
  company: string;
  url: string;
  position: string;
  period: string;
  description: string;
  bullets: Bullet[];
}

/** @deprecated */
export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  icon: string;
  /** @deprecated */
  level: Level;
  contents: string[];
}

export interface Project {
  order: number;
  name: string;
  at: string;
  period: string;
  description: string;
  role: string;
  participants: number;
  bullets: Bullet[];
  path: string | null;
}

export interface Portfolio {
  name: string;
  page_id: string;
  cover_image: string;
  title: string;
}