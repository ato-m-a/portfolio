"use client";

import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';

const Notion = ({ recordMap }: { recordMap: any }) => {
  return (
    <div className="bg-gray-100">
      <NotionRenderer recordMap={recordMap} components={{ Code, Collection, Equation, Modal }} />
    </div>
  )
}

export default Notion;