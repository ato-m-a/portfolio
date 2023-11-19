"use client";

import * as Floating from '@/components/layout/floating';
import type { ReactElement } from 'react';
import Body from './body';

const RemoteControl = (): ReactElement => {
  return (
    <Floating.wrapper className="p-2 bottom-4 right-6 max-md:right-4">
      <Body />
    </Floating.wrapper>
  )
}

export default RemoteControl;