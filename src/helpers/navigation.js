export const PAGES_ROOTS = {
  shooting: 'shooting',
  addShooting: 'shooting/add',
  debug: 'debug',
};

export const getRootLink = (pathname) => {
  return `/${pathname}`;
};
