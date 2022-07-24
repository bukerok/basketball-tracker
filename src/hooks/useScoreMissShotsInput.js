import { useEffect, useState } from 'react';

const ACTIONS = {
  score: 'score',
  miss: 'miss',
};

const getShots = (actions) => {
  return actions.reduce((acc, curr) => {
    if (curr === ACTIONS.score) {
      acc.score++;
      acc.attempts++;
    } else if (curr === ACTIONS.miss) {
      acc.attempts++;
    }

    return acc;
  }, {
    score: 0,
    attempts: 0,
  });
};

export default function useScoreMissShotsInput(shots, onChange) {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    if (
      !shots
      || (shots?.score === 0 && shots?.attempts === 0)
    ) {
      setActions([]);
    }
  }, [shots]);

  const handleUpdate = (newActions) => {
    setActions(newActions);
    onChange(getShots(newActions));
  };

  const onScore = () => {
    const newActions = [
      ...actions,
      ACTIONS.score,
    ];

    handleUpdate(newActions);
  };

  const onMiss = () => {
    const newActions = [
      ...actions,
      ACTIONS.miss,
    ];

    handleUpdate(newActions);
  };

  const onUndo = () => {
    const newActions = actions.slice(0, actions.length - 1);

    handleUpdate(newActions);
  };

  const onReset = () => {
    handleUpdate([]);
  };

  const {
    score,
    attempts,
  } = getShots(actions);

  return {
    score,
    attempts,
    onScore,
    onMiss,
    onUndo,
    onReset,
  };
}
