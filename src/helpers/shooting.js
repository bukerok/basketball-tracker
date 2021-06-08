export const getZoneProp = (zone) => {
  let prop;

  if (zone === 5) {
    prop = 'ft';
  } else if (zone < 11) {
    prop = '2pt';
  } else if (zone < 16){
    prop = '3pt';
  }

  if (!prop) {
    throw new Error('Unknow zone.');
  }

  return prop;
};

export const mapZoneToLabel = (zone) => {
  return {
    ft: 'FT',
    '2pt': '2PT',
    '3pt': '3PT',
  }[getZoneProp(zone)];
};
