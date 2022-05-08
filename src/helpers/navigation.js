export const PAGES_ROOTS = {
  homepage: '',
  statistics: 'statistics',
  addShooting: 'shooting/add',
  debug: 'debug',
};

export const getRootLink = (pathname) => {
  return `/${pathname}`;
};
