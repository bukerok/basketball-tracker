import Button from '@material-ui/core/Button';

import useScoreMissShotsInput from '../../../hooks/useScoreMissShotsInput';
import ShotsDivider from '../../ShotsDivider';

import './index.scss';

export default function ScoreMissShotsInput({
  shots,
  onChange
}) {
  const {
    score,
    attempts,
    onScore,
    onMiss,
    onUndo,
    onReset,
  } = useScoreMissShotsInput(shots, onChange);

  return (
    <div className="score-miss-shots-input">
      <div className="score-miss-shots-input__value">
        <div className="text-value">
          <p className="text-value__label">Score</p>
          <p className="text-value__value">{score}</p>
        </div>
        <ShotsDivider />
        <div className="text-value">
          <p className="text-value__label">Attempts</p>
          <p className="text-value__value">{attempts}</p>
        </div>
      </div>
      <div className="score-miss-shots-input__input-controls">
        <Button
          className="button button__score"
          variant="contained"
          onClick={onScore}
        >
          Score
        </Button>
        <Button
          className="button button__miss"
          variant="contained"
          onClick={onMiss}
        >
          Miss
        </Button>
      </div>
      <div className="score-miss-shots-input__legend-controls">
        <Button
          variant="outlined"
          onClick={onUndo}
        >
          Undo
        </Button>
        <Button
          variant="outlined"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
