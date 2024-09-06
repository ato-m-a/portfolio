"use client";

import { useParams } from 'next/navigation';
import type { ReactElement } from 'react';
import type { CommentProps } from './types/comment';

const Comment = ({ className }: CommentProps): ReactElement => {
  const { name } = useParams();

  return (
    <h2 className={className}>
      😢&nbsp;
      {
        name
        ? <span className="underline text-gray-500">&quot;{decodeURI(name as string)}&quot;</span>
        : '이런!'
      }
      &nbsp;페이지를 찾지 못했어요!
    </h2>
  )
}

export default Comment;