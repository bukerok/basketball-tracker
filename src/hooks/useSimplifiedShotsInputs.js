import { useEffect, useState } from 'react';

const getShots = (score, attempts) => {
  return {
    score,
    attempts,
  };
};

export default function useSimplifiedShotsInputs(shots, onChange) {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const newAttempts = shots?.attempts || 0;
    let newScore = shots?.score || 0;

    if (newScore > newAttempts) {
      newScore = newAttempts;
      onChange(getShots(newScore, newAttempts));
    } else {
      setScore(newScore);
      setAttempts(newAttempts);
    }
  }, [shots, onChange]);

  const onScoreIncrement = () => {
    onChange(getShots(score + 1, attempts + 1))
  };
  const onScoreDecrement = () => {
    onChange(getShots(Math.max(score - 1, 0), attempts));
  };
  const onAttemptsIncement = () => {
    onChange(getShots(score, attempts + 1));
  };
  const onAttemptsDecrement = () => {
    const newAttempts = Math.max(attempts - 1, 0);
    const newScore = newAttempts < score ? newAttempts : score;

    onChange(getShots(newScore, newAttempts));
  };

  return {
    score,
    attempts,
    onScoreIncrement,
    onScoreDecrement,
    onAttemptsIncement,
    onAttemptsDecrement,
  };
}