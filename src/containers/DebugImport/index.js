import { useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { addAll } from '../../store/features/shots/shotsAPI';

import './index.scss';

const DebugImport = () => {
  const inputRef = useRef();
  const handleImportClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = () => {
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      const result = JSON.parse(event.target.result);

      addAll(result);
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
