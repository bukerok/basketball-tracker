import { SHOT_TYPES } from './constants/shooting';
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
      [PROP_TO_LABEL_MAP[SHOT_TYPES.freeThrow]]: calculateStat(record[SHOT_TYPES.freeThrow]),
      [PROP_TO_LABEL_MAP[SHOT_TYPES.twoPoint]]: calculateStat(record[SHOT_TYPES.twoPoint]),
      [PROP_TO_LABEL_MAP[SHOT_TYPES.threePoint]]: calculateStat(record[SHOT_TYPES.threePoint]),
    };
  });
};
