import { useEffect, useState } from 'react';

const isValidValue = (value) => {
  return value != null && !isNaN(value)
};

const getValue = (score, attempts) => {
  let error;

  if (
    !isValidValue(score)
    || !isValidValue(attempts)
  ) {
    error = 'Score and Attempts should be integer value.';
  } else if (score > attempts) {
    error = 'Score should not be larger than Attempts.';
  }

  return {
    score,
    attempts,
    error,
  };
};

export default function useTextShotsInput(shots, onChange) {
  const [score, setScore] = useState('');
  const [attempts, setAttempts] = useState('');

  useEffect(() => {
    setScore(shots?.score || '');
    setAttempts(shots?.attempts || '');
  }, [shots]);

  const handleScoreChange = (value) => {
    setScore(value);
    onChange(getValue(value, attempts));
  };
  const handleAttemptsChange = (value) => {
    setAttempts(value);
    onChange(getValue(score, value));
  };

  return {
    score,
    attempts,
    onScoreChange: handleScoreChange,
    onAttemptsChange: handleAttemptsChange,
  };
}
