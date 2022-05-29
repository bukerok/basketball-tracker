import { useDispatch } from 'react-redux';

import SimpleShotInput from '../../components/SimpleShotInput';
import { addError } from '../../store/features/notifications/notificationsSlice';
import { addRecord, noShotsError } from '../../store/features/shots/shotsSlice';

const AddSimpleShotPanel = ({
  inputType,
}) => {
  const dispatch = useDispatch();

  const handleAdd = (type, shots) => {
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
      type,
      score,
      attempts,
    }));
  };

  return (
    <SimpleShotInput
      inputType={inputType}
      onAdd={handleAdd}
    />
  );
};

export default AddSimpleShotPanel;