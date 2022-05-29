import { useState } from 'react';
import Button from '@material-ui/core/Button';

import { SHOTS_INPUTS } from '../../helpers/constants/shotsInputs';
import ShotsInput from '../ShotsInput';
import ZoneSelector from '../ZoneSelector';
import SimplifiedShotsInput from '../SimplifiedShotsInput';

import './index.scss';

const ZoneShotInput = ({
  inputType,
  onAdd,
}) => {
  const [zone, setZone] = useState(null);
  const [shots, setShots] = useState(null);
  let InputComponent = ShotsInput;

  if (inputType === SHOTS_INPUTS.simplified) {
    InputComponent = SimplifiedShotsInput;
  }

  const handleAdd = () => {
    setZone(null);
    setShots(null);
    onAdd(zone, shots);
  };

  return (
    <div className="zone-shot-input">
      <ZoneSelector
        activeZone={zone}
        onChange={setZone}
      />
      <InputComponent
        shots={shots}
        onChange={setShots}
      />
      <Button
        className="zone-shot-input__add-button"
        color="primary"
        variant="contained"
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
};

export default ZoneShotInput;
