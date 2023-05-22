import React from 'react';
import MyButton from './UI/button/MyButton';
import usePagination from '../hooks/usePagination';

const Pagination = ({ page, onClick, totalPages }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map(p => (
        <MyButton
          className={p === page ? 'page page__current' : 'page'}
          onClick={() => onClick(p)}
          key={p}>
          {p}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
