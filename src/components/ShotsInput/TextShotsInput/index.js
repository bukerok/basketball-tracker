import TextField from '@material-ui/core/TextField';

import useTextShotsInput from '../../../hooks/useTextShotsInput';
import ShotsDivider from '../../ShotsDivider';

import './index.scss';


export default function TextShotsInput({
  shots,
  onChange,
}) {
  const {
    score,
    attempts,
    onScoreChange,
    onAttemptsChange,
  } = useTextShotsInput(shots, onChange);

  return (
    <div className="text-shots-input">
      <TextField
        id="score-input"
        type="number"
        label="Score"
        variant="outlined"
        value={score}
        onChange={(e) => onScoreChange(parseInt(e.target.value) || '')}
      />
      <ShotsDivider />
      <TextField
        id="attempts-input"
        type="number"
        label="Attempts"
        variant="outlined"
        value={attempts}
        onChange={(e) => onAttemptsChange(parseInt(e.target.value) || '')}
      />
    </div>
  );
}
