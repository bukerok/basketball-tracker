import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ZoneShotInput from '../../components/ZoneShotInput';
import { getRootLink, PAGES_ROOTS } from '../../helpers/navigation';
import { addError } from '../../store/features/notifications/notificationsSlice';
import { addRecord } from '../../store/features/shots/shotsSlice';

const AddZoneShotPanel = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddZoneShot = (zone, shots) => {
    if (!zone) {
      dispatch(addError('No zone selected.'));

      return;
    }

    if (!shots) {
      dispatch(addError('No shots data.'));

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

    history.replace(getRootLink(PAGES_ROOTS.statistics));
  };

  return (
    <ZoneShotInput onAdd={handleAddZoneShot}/>
  );
};

export default AddZoneShotPanel;
