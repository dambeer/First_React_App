import { useEffect, useRef } from 'react';

const useObserver = (posts, postsRef, setPage, canLoad) => {
  const observer = useRef();

  useEffect(() => {
    if (observer.current) {
      // очистка прошлого обозревателя
      observer.current.disconnect();
    }
    if (postsRef.current) {
      const callback = function (entries, observer) {
        if (entries[0].isIntersecting && canLoad) {
          setPage();
        }
      };
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(postsRef.current.lastChild);
    }
  }, [posts]);
};

export default useObserver;
