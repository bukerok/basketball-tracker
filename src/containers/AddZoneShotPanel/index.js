import { useDispatch } from 'react-redux';

import ZoneShotInput from '../../components/ZoneShotInput';
import { addError } from '../../store/features/notifications/notificationsSlice';
import { addRecord, noShotsError } from '../../store/features/shots/shotsSlice';

const AddZoneShotPanel = ({
  inputType,
}) => {
  const dispatch = useDispatch();

  const handleAddZoneShot = (zone, shots) => {
    if (!zone) {
      dispatch(addError('No zone selected.'));

      return;
    }

    if (!shots) {
      dispatch(noShotsError());

      return;
    }

    const {
      error,
      score,
      attempts,
    } = shots;

    if (error) {
      dispatch(addError(error));

      return;
    }

    dispatch(addRecord({
      zone,
      score,
      attempts,
    }));
  };

  return (
    <ZoneShotInput
      inputType={inputType}
      onAdd={handleAddZoneShot}
    />
  );
};

export default AddZoneShotPanel;
