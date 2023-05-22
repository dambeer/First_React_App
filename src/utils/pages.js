export const getCountPage = (limit, totalCount) => {
  return Math.ceil(totalCount / limit);
};
