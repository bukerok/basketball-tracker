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
      <ShotsInput
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
