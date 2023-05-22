import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        type="text"
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={sortPosts => setFilter({ ...filter, sort: sortPosts })}
        defaultValue="Сортировать по"
        options={[
          { value: 'title', name: 'Названию' },
          { value: 'body', name: 'Описанию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
