import { SHOT_TYPES } from './constants/shooting';

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

export const calculateStats = (shots = []) => {
  return shots.reduce(((acc, aShot) => {
    acc[aShot.type].score += aShot.score;
    acc[aShot.type].attempts += aShot.attempts;

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

export const calculateZoneStats = (shots = []) => {
  return shots.reduce((acc, aShot) => {
    if (!aShot.zone) {
      return acc;
    }

    acc[aShot.zone] = {
      score: aShot.score + (acc[aShot.zone]?.score || 0),
      attempts: aShot.attempts + (acc[aShot.zone]?.attempts || 0),
    };

    return acc;
  }, {});
};
