import {
  getZoneProp,
  PROP_TO_LABEL_MAP,
} from './shooting';
import { calculateStat } from './statistics';

export const aggregateRecords = (records) => {
  const result = [];

  records.forEach((record) => {
    const lastResult = result[result.length - 1];
    const recordDate = (new Date(record.date)).toLocaleDateString();
    const recordProp = getZoneProp(record.zone);

    if (!recordProp) {
      return;
    }

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
      [PROP_TO_LABEL_MAP.ft]: calculateStat(record.ft),
      [PROP_TO_LABEL_MAP['2pt']]: calculateStat(record['2pt']),
      [PROP_TO_LABEL_MAP['3pt']]: calculateStat(record['3pt']),
    };
  });
};
