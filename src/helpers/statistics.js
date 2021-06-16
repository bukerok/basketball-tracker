import { getZoneProp } from './shooting';

const calculateStat = ({
  score,
  attempts,
}) => {
  if (attempts === 0) {
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

  return {
    ft: calculateStat(aggregated.ft),
    '2pt': calculateStat(aggregated['2pt']),
    '3pt': calculateStat(aggregated['3pt']),
  };
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
