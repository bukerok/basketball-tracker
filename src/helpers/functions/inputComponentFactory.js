import ButtonShotsInput from '../../components/ShotsInput/ButtonShotsInput';
import ScoreMissShotsInput from '../../components/ShotsInput/ScoreMissShotsInput';
import TextShotsInput from '../../components/ShotsInput/TextShotsInput';
import { SHOTS_INPUTS } from '../constants/shotsInputs';

export const getInputComponent = (type) => {
  const INPUTS_MAP = {
    [SHOTS_INPUTS.text]: TextShotsInput,
    [SHOTS_INPUTS.button]: ButtonShotsInput,
    [SHOTS_INPUTS.scoreMiss]: ScoreMissShotsInput,
  };

  // fallback added for older clients
  return INPUTS_MAP[type] || TextShotsInput;
};
