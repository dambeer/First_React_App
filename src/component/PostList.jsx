import React from 'react';
import { forwardRef } from 'react';
import PostItem from './PostItem';

export const PostList = forwardRef(({ posts, title, remove }, ref) => {
  if (!posts.length)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Посты не найдены
      </h1>
    );

  return (
    <div ref={ref}>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{title}</h2>
      {posts.map(post => (
        <PostItem
          id={post.id}
          post={post}
          key={post.id}
          remove={remove}
        />
      ))}
    </div>
  );
});
