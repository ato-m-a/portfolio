"use client";

import { useCallback, type ReactElement } from 'react';
import { Emoji } from '@/constants/emoji';

const Navigation = (): ReactElement => {
  const goTo = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      window.scrollTo({
        top: elementRect.top + scrollTop - 200,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="fixed p-2 bottom-4 right-6 max-md:right-4">
      <div className="remote-wrapper max-md:px-2 max-md:py-2">
        <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" role="button" onClick={() => goTo('about')}>{Emoji.hello}</p>
        <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" role="button" onClick={() => goTo('skill')}>{Emoji.star}</p>
        <p className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" role="button" onClick={() => goTo('experience')}>{Emoji.briefcase}</p>
        <p className="remote-button max-md:w-8 max-md:h-8 max-md:text-lg" role="button" onClick={() => goTo('project')}>{Emoji.rocket}</p>
      </div>
    </div>
  )
}

export default Navigation;