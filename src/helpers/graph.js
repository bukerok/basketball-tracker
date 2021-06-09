import {
  getZoneProp,
  PROP_TO_LABEL_MAP,
} from './shooting';

const calculateValue = (data) => {
  if (!data) {
    return null;
  }

  return data.score / data.attempts * 100;
};

export const aggregateRecords = (records) => {
  const result = [];

  records.forEach((record) => {
    const lastResult = result[result.length - 1];
    const recordDate = (new Date(record.date)).toLocaleDateString();
    const recordProp = getZoneProp(record.zone);

    if (
      lastResult
      && lastResult.date === recordDate
    ) {
      lastResult[recordProp] = {
        score: record.score + (lastResult[recordProp]?.score || 0),
        attempts: record.attempts + (lastResult[recordProp]?.attempts || 0),
      };

      lastResult[recordProp].score += record.score;
      lastResult[recordProp].attempts += record.attempts;
    } else {
      result.push({
        date: recordDate,
        [recordProp]: {
          score: record.score,
          attempts: record.attempts,
        },
      });
    }
  });

  return result.map((record) => {
    return {
      date: record.date,
      [PROP_TO_LABEL_MAP.ft]: calculateValue(record.ft),
      [PROP_TO_LABEL_MAP['2pt']]: calculateValue(record['2pt']),
      [PROP_TO_LABEL_MAP['3pt']]: calculateValue(record['3pt']),
    };
  });
};
