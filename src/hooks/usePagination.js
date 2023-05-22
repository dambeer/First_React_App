import { useMemo, useState } from 'react';

const usePagination = totalPages => {
  const [pagesCount, setPagesCount] = useState([]);

  useMemo(() => {
    const pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }

    setPagesCount(pagesArray);
  }, [totalPages]);

  return pagesCount;
};

export default usePagination;
