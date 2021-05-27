import { useState } from 'react';
import Button from '@material-ui/core/Button';

import ZoneSelector from '../components/ZoneSelector';
import BaseTemplate from './baseTemplate';
import ShotsInput from '../components/ShotsInput';

const AddShootingPage = () => {
  const [zone, setZone] = useState(1);
  const [shots, setShots] = useState(null);

  const addShootingRecord = () => {
    if (!zone) {
      console.error('No zone selected.');

      return;
    }

    if (!shots) {
      console.error('No shots data.');

      return;
    }

    if (shots.error) {
      console.error(shots.error);

      return;
    }

    console.log(`Add record zone: ${zone}, score: ${shots.score}, attempts: ${shots.attempts}.`);
  };

  return (
    <BaseTemplate>
      <ZoneSelector
        value={zone}
        onChange={setZone}
      />
      <ShotsInput
        onChange={setShots}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={addShootingRecord}
      >
        Add
      </Button>
    </BaseTemplate>
  );
};

export default AddShootingPage;
