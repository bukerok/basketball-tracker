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
  const aggregated = records.reduce(((acc, record) => {
    const {
      zone,
      score,
      attempts,
    } = record;
    const prop = getZoneProp(zone);

    acc[prop].score += score;
    acc[prop].attempts += attempts;

    return acc;
  }), {
    ft: {
      score: 0,
      attempts: 0,
    },
    '2pt': {
      score: 0,
      attempts: 0,
    },
    '3pt': {
      score: 0,
      attempts: 0,
    },
  });

  return aggregated;
};

export const calculateZoneStats = (records = []) => {
  const aggregated = records.reduce((acc, record) => {
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

  return aggregated;
};
