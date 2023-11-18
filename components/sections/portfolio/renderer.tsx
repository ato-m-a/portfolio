"use client";

import { useAnimation } from '@/hooks/useAnimation';
import { useRef } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';

const Notion = ({ recordMap }: { recordMap: any }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useAnimation(wrapperRef, true);

  return (
    <div ref={wrapperRef} className="bg-notion-bg">
      <NotionRenderer recordMap={recordMap} components={{ Code, Collection, Equation, Modal }} />
    </div>
  )
}

export default Notion;