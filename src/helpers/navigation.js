export const PAGES_ROOTS = {
  homepage: '',
  statistics: 'statistics',
  addShooting: 'shooting/add',
  debug: 'debug',
  simpleTracker: 'trackers/simple-tracker',
  zoneTracker: 'trackers/zone-tracker',
};

export const getRootLink = (pathname) => {
  return `/${pathname}`;
};
