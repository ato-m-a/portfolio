"use client";

import Emoji from '@/components/layout/emoji';
import { useCallback, type ReactElement } from 'react';

const Body = (): ReactElement => {
  const goTo = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      window.scrollTo({
        top: elementRect.top + scrollTop - 190,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="remote-wrapper max-md:px-2 max-md:py-2">
      <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('about')}><Emoji.hello /></p>
      <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('skills')}><Emoji.skill /></p>
      <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('experience')}><Emoji.experience /></p>
      <p className="remote-button max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('project')}><Emoji.project /></p>
    </div>
  )
}

export default Body;