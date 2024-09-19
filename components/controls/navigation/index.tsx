"use client";

import type { ReactElement } from 'react';
import { Emoji } from '@/constants/emoji';

const Navigation = (): ReactElement => {
  const goTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      window.scrollTo({
        top: elementRect.top + scrollTop - 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed p-2 bottom-4 right-6 max-md:right-4">
      <div className="remote-wrapper max-md:px-2 max-md:py-2">
        <button type="button" className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('about')}>{Emoji.hello}</button>
        <button type="button" className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('skill')}>{Emoji.star}</button>
        <button type="button" className="remote-button mb-3 max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('experience')}>{Emoji.briefcase}</button>
        <button type="button" className="remote-button max-md:w-8 max-md:h-8 max-md:text-lg" onClick={() => goTo('project')}>{Emoji.rocket}</button>
      </div>
    </div>
  )
}

export default Navigation;