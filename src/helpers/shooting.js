export const mapZoneToLabel = (zone) => {
  let label = '';

  if (zone === 5) {
    label = 'FT';
  } else if (zone < 11) {
    label = '2PT';
  } else if (zone < 16){
    label = '3PT';
  }

  return label;
};
