import { useState } from 'react';
import Button from '@material-ui/core/Button';

import TypeSelector from '../TypeSelector';
import ShotsInput from '../ShotsInput';
import { SHOT_TYPES } from '../../helpers/constants/shooting';

const DEFAULT_TYPE = SHOT_TYPES.twoPoint;

const SimpleShotInput = ({
  onAdd,
}) => {
  const [type, setType] = useState(DEFAULT_TYPE);
  const [shots, setShots] = useState(null);

  const handleAdd = () => {
    setType(DEFAULT_TYPE);
    setShots(null);
    onAdd(type, shots);
  };

  return (
    <div className="simple-shot-input">
      <TypeSelector
        value={type}
        onChange={setType}
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

export default SimpleShotInput;