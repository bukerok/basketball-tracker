import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getAll } from '../../store/features/shots/shotsAPI';

import './index.scss';

const DebugExport = () => {
  const handleExportClick = () => {
    getAll()
      .then((records) => {
        const data = JSON.stringify(records);
        const link = document.createElement('a');
        const blob = new Blob([data], {type: 'text/json'});

        link.download = `basketball-assistant-backup-${(new Date()).toISOString()}.json`;
        link.href = window.URL.createObjectURL(blob);
        link.click();
      });
  };

  return (
    <div className="debug-export">
      <Typography variant="h5">Export</Typography>
      <Button
        className="debug-export__button"
        variant="contained"
        color="primary"
        onClick={handleExportClick}
      >
        Export Data
      </Button>
    </div>
  );
};

export default DebugExport;
