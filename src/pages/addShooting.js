import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';

import ZoneSelector from '../components/ZoneSelector';
import ShotsInput from '../components/ShotsInput';
import { addRecord } from '../store/features/shots/shotsSlice';
import {
  getRootLink,
  PAGES_ROOTS,
} from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const AddShootingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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

    const {
      error,
      score,
      attempts,
    } = shots;

    if (error) {
      console.error(error);

      return;
    }

    dispatch(addRecord({
      zone,
      score,
      attempts,
    }));
    history.push(getRootLink(PAGES_ROOTS.shooting));
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