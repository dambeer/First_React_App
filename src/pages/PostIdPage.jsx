import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import Loader from '../Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, PostError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchCommentsByPost, isCommentsLoading, CommentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPosts(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchCommentsByPost();
  }, []);

  return (
    <div>
      <h1>Страница поста с ID: {params.id}</h1>
      {PostError && <h1>Error: {PostError}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии</h2>
      {CommentsError && <h2>Error: {CommentsError}</h2>}
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(comment => (
            <div
              key={comment.id}
              style={{ marginTop: '20px' }}>
              <h4>
                {comment.id}. {comment.name}
              </h4>
              <div>{comment.body}</div>
              <span style={{ color: 'grey', marginTop: '10px' }}>
                {comment.email}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
