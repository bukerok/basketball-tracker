import { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';

import './index.scss';

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

export default function ShotsInput({
  shots,
  onChange,
}) {
  const [score, setScore] = useState('');
  const [attempts, setAttempts] = useState('');

  useEffect(() => {
    setScore(shots?.score || '');
    setAttempts(shots?.attempts || '');
  }, [shots]);

  const handleScoreChange = (e) => {
    const value = parseInt(e.target.value) || '';

    setScore(value);
    onChange(getValue(value, attempts));
  };
  const handleAttemptsChange = (e) => {
    const value = parseInt(e.target.value) || '';

    setAttempts(value);
    onChange(getValue(score, value));
  };

  return (
    <div className="shots-input">
      <TextField
        type="number"
        label="Score"
        variant="outlined"
        value={score}
        onChange={handleScoreChange}
      />
      <span className="shots-input__separator"></span>
      <TextField
        type="number"
        label="Attempts"
        variant="outlined"
        value={attempts}
        onChange={handleAttemptsChange}
      />
    </div>
  );
};
