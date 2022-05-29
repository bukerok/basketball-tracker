import useSimplifiedShotsInputs from '../../hooks/useSimplifiedShotsInputs';
import ButtonInput from '../ButtonInput';
import ShotsDivider from '../ShotsDivider';

import './index.scss';

const SimplifiedShotsInput = ({
  shots,
  onChange,
}) => {
  const {
    score,
    attempts,
    onScoreIncrement,
    onScoreDecrement,
    onAttemptsIncement,
    onAttemptsDecrement,
  } = useSimplifiedShotsInputs(shots, onChange);

  return (
    <div className="simplified-shots-input">
      <ButtonInput
        label="Score"
        value={score}
        onIncrement={onScoreIncrement}
        onDecrement={onScoreDecrement}
      />
      <ShotsDivider />
      <ButtonInput
        className="simplified-shots-input__attempts"
        label="Attempts"
        value={attempts}
        onIncrement={onAttemptsIncement}
        onDecrement={onAttemptsDecrement}
      />
    </div>
  );
};

export default SimplifiedShotsInput;