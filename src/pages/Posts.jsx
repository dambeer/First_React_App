import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import useObserver from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import MyModal from '../MyModal/MyModal';
import Pagination from '../component/Pagination';
import PostFilter from '../component/PostFilter';
import PostForm from '../component/PostForm';
import { PostList } from '../component/PostList';
import { getCountPage } from '../utils/pages';
import Loader from '../Loader/Loader';
import MyButton from '../component/UI/button/MyButton';
import MySelect from '../component/UI/MySelect';

function Posts() {
  const postsRef = useRef();

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getCountPage(limit, totalCount));
  });

  useObserver(
    posts,
    postsRef,
    () => {
      setPage(page + 1);
    },
    page < totalPages
  );

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: '15px' }}
        onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0px' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <MySelect
        value={limit}
        onChange={limit => {
          setPosts([]);
          setPage(1);
          setLimit(limit);
        }}
        defaultValue="Показать постов"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />

      {postError && <h1>Ошибка: {postError}</h1>}

      <PostList
        posts={sortedAndSearchedPosts}
        title={'Посты про JavaScript'}
        remove={removePost}
        ref={postsRef}
      />

      {isLoading && (
        <div style={{ marginTop: '20px' }}>
          <Loader />
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        page={page}
        onClick={setPage}
      />
    </div>
  );
}

export default Posts;
