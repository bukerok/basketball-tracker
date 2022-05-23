import { SHOT_TYPES } from './constants/shooting';
import { TYPE_TO_LABEL_MAP } from './shooting';
import { calculateStat } from './statistics';

export const aggregateShots = (shots) => {
  const result = [];

  shots.forEach((aShot) => {
    const lastResult = result[result.length - 1];
    const date = aShot.date.toLocaleDateString();

    if (
      lastResult
      && lastResult.date === date
    ) {
      lastResult[aShot.type] = {
        score: aShot.score + (lastResult[aShot.type]?.score || 0),
        attempts: aShot.attempts + (lastResult[aShot.type]?.attempts || 0),
      };
    } else {
      result.push({
        date,
        [aShot.type]: {
          score: aShot.score,
          attempts: aShot.attempts,
        },
      });
    }
  });

  return result.map((record) => {
    return {
      date: record.date,
      // TODO move type to label mapping to graph component
      [TYPE_TO_LABEL_MAP[SHOT_TYPES.freeThrow]]: calculateStat(record[SHOT_TYPES.freeThrow]),
      [TYPE_TO_LABEL_MAP[SHOT_TYPES.twoPoint]]: calculateStat(record[SHOT_TYPES.twoPoint]),
      [TYPE_TO_LABEL_MAP[SHOT_TYPES.threePoint]]: calculateStat(record[SHOT_TYPES.threePoint]),
    };
  });
};
