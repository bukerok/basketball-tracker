import { useState } from 'react';
import Button from '@material-ui/core/Button';

import TypeSelector from '../TypeSelector';
import { SHOT_TYPES } from '../../helpers/constants/shooting';
import { getInputComponent } from '../../helpers/functions/inputComponentFactory';

const DEFAULT_TYPE = SHOT_TYPES.twoPoint;

const SimpleShotInput = ({
  inputType,
  onAdd,
}) => {
  const [type, setType] = useState(DEFAULT_TYPE);
  const [shots, setShots] = useState(null);
  const InputComponent = getInputComponent(inputType);

  const handleAdd = () => {
    onAdd(type, shots);

    if (shots && !shots.error) {
      setType(DEFAULT_TYPE);
      setShots(null);
    }
  };

  return (
    <div className="simple-shot-input">
      <TypeSelector
        value={type}
        onChange={setType}
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

export default SimpleShotInput;