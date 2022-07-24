import ButtonShotsInput from '../../components/ShotsInput/ButtonShotsInput';
import TextShotsInput from '../../components/ShotsInput/TextShotsInput';
import { SHOTS_INPUTS } from '../constants/shotsInputs';

export const getInputComponent = (type) => {
  const INPUTS_MAP = {
    [SHOTS_INPUTS.text]: TextShotsInput,
    [SHOTS_INPUTS.button]: ButtonShotsInput,
  };

  // fallback added for older clients
  return INPUTS_MAP[type] || TextShotsInput;
};
