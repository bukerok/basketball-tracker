export const PAGES_ROOTS = {
  homepage: '',
  shooting: 'shooting',
  addShooting: 'shooting/add',
  debug: 'debug',
};

export const getRootLink = (pathname) => {
  return `/${pathname}`;
};
