import { useState } from 'react';
import Button from '@material-ui/core/Button';

import ShotsInput from '../ShotsInput';
import ZoneSelector from '../ZoneSelector';

import './index.scss';

const ZoneShotInput = ({
  onAdd,
}) => {
  const [zone, setZone] = useState(null);
  const [shots, setShots] = useState(null);

  return (
    <div className="zone-shot-input">
      <ZoneSelector
        activeZone={zone}
        onChange={setZone}
      />
      <ShotsInput
        onChange={setShots}
      />
      <Button
        className="zone-shot-input__add-button"
        color="primary"
        variant="contained"
        onClick={() => onAdd(zone, shots)}
      >
        Add
      </Button>
    </div>
  );
};

export default ZoneShotInput;
