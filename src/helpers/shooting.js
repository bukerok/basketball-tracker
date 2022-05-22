import { SHOT_TYPES } from './constants/shooting';

export const getZoneProp = (zone) => {
  let prop;

  if (zone === 5) {
    prop = SHOT_TYPES.freeThrow;
  } else if (zone < 11) {
    prop = SHOT_TYPES.twoPoint;
  } else if (zone < 16){
    prop = SHOT_TYPES.threePoint;
  }

  return prop;
};

export const PROP_TO_LABEL_MAP = {
  [SHOT_TYPES.freeThrow]: 'FT',
  [SHOT_TYPES.twoPoint]: '2PT',
  [SHOT_TYPES.threePoint]: '3PT',
};

export const mapZoneToLabel = (zone) => {
  return PROP_TO_LABEL_MAP[getZoneProp(zone)] || '';
};
