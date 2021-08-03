import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { addAll } from '../../store/features/shots/shotsAPI';
import { addSuccess } from '../../store/features/notifications/notificationsSlice';

import './index.scss';

const DebugImport = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleImportClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = () => {
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      const result = JSON.parse(event.target.result);

      addAll(result)
        .then(() => {
          dispatch(addSuccess('Data imported.'));
        });
    });
    reader.readAsText(inputRef.current.files[0]);
  };

  return (
    <div className="debug-import">
      <Typography variant="h5">Import</Typography>
      <input
        ref={inputRef}
        hidden
        type="file"
        onChange={handleFileChange}
      />
      <Button
        className="debug-export__button"
        variant="contained"
        color="primary"
        onClick={handleImportClick}
      >
        Import Data
      </Button>
    </div>
  );
};

export default DebugImport;
