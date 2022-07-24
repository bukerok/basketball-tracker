import useButtonShotsInput from '../../../hooks/useButtonShotsInput';
import ButtonInput from '../../ButtonInput';
import ShotsDivider from '../../ShotsDivider';

import './index.scss';

export default function ButtonShotsInput({
  shots,
  onChange,
}) {
  const {
    score,
    attempts,
    onScoreIncrement,
    onScoreDecrement,
    onAttemptsIncement,
    onAttemptsDecrement,
  } = useButtonShotsInput(shots, onChange);

  return (
    <div className="button-shots-input">
      <ButtonInput
        label="Score"
        value={score}
        onIncrement={onScoreIncrement}
        onDecrement={onScoreDecrement}
      />
      <ShotsDivider />
      <ButtonInput
        className="button-shots-input__attempts"
        label="Attempts"
        value={attempts}
        onIncrement={onAttemptsIncement}
        onDecrement={onAttemptsDecrement}
      />
    </div>
  );
}
