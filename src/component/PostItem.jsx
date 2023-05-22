import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

export default function PostItem({ post, id, remove }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        {/* <NavLink
          to={`/posts/${id}`}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Messages
        </NavLink> */}
        <MyButton
          onClick={async event => {
            navigate(`/posts/${id}`);
          }}>
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
}
