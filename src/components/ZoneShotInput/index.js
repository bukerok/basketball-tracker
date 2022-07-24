import { useState } from 'react';
import Button from '@material-ui/core/Button';

import ZoneSelector from '../ZoneSelector';
import { getInputComponent } from '../../helpers/functions/inputComponentFactory';

import './index.scss';

const ZoneShotInput = ({
  inputType,
  onAdd,
}) => {
  const [zone, setZone] = useState(null);
  const [shots, setShots] = useState(null);
  const InputComponent = getInputComponent(inputType);

  const handleAdd = () => {
    onAdd(zone, shots);

    if (shots && !shots.error) {
      setZone(null);
      setShots(null);
    }
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
