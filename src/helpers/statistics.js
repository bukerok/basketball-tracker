import { SHOT_TYPES } from './constants/shooting';
import { getZoneProp } from './shooting';

export const formatStat = (data) => {
  const value = calculateStat(data);

  return value == null ?
    '-' :
    `${value.toFixed(2)}%`;
};

export const calculateStat = ({
  score,
  attempts,
} = {}) => {
  if (
    attempts == null
    || attempts === 0
  ) {
    return null;
  }

  return score / attempts * 100;
};

export const calculateStats = (records = []) => {
  return records.reduce(((acc, record) => {
    const {
      zone,
      score,
      attempts,
    } = record;
    const prop = getZoneProp(zone);

    if (prop) {
      acc[prop].score += score;
      acc[prop].attempts += attempts;
    }

    return acc;
  }), {
    [SHOT_TYPES.freeThrow]: {
      score: 0,
      attempts: 0,
    },
    [SHOT_TYPES.twoPoint]: {
      score: 0,
      attempts: 0,
    },
    [SHOT_TYPES.threePoint]: {
      score: 0,
      attempts: 0,
    },
  });
};

export const calculateZoneStats = (records = []) => {
  return records.reduce((acc, record) => {
    const {
      zone,
      score,
      attempts,
    } = record;
    let accData = acc[zone];

    if (!accData) {
      acc[zone] = {
        score,
        attempts,
      };
    } else {
      accData.score += score;
      accData.attempts += attempts;
    }

    return acc;
  }, {});
};
