import { SHOTS_INPUTS } from "../../constants/shotsInputs";

export const getRemmapedInputType = (type) => {
  let result = type;

  if (type === 'common') {
    result = SHOTS_INPUTS.text;
  } else if (type === 'simplified') {
    result = SHOTS_INPUTS.button;
  }

  return result;
}
