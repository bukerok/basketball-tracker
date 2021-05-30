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
    let selector;

    if (zone === 5) {
      selector = 'ft';
    } else if (zone < 11) {
      selector = '2pt';
    } else if (zone < 16){
      selector = '3pt';
    }

    if (selector) {
      acc[selector].score += score;
      acc[selector].attempts += attempts;
    }

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
