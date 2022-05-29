import TextField from '@material-ui/core/TextField';

import useShotsInputs from '../../hooks/useShotsInputs';
import ShotsDivider from '../ShotsDivider';

import './index.scss';


export default function ShotsInput({
  shots,
  onChange,
}) {
  const {
    score,
    attempts,
    onScoreChange,
    onAttemptsChange,
  } = useShotsInputs(shots, onChange);

  return (
    <div className="shots-input">
      <TextField
        type="number"
        label="Score"
        variant="outlined"
        value={score}
        onChange={(e) => onScoreChange(parseInt(e.target.value) || '')}
      />
      <ShotsDivider />
      <TextField
        type="number"
        label="Attempts"
        variant="outlined"
        value={attempts}
        onChange={(e) => onAttemptsChange(parseInt(e.target.value) || '')}
      />
    </div>
  );
}
