import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import CloseIcon from '@material-ui/icons/Close';

import './index.scss';

const ACTIONS = {
  settings: 'settings',
  instruction: 'instruction',
};

const TrackerActionsPanel = ({
  instruction,
  settings,
}) => {
  const [activeAction, setActiveAction] = useState(null);

  const handleClose = () => {
    setActiveAction(null);
  };

  const getTitle = (action) => {
    let result = '';

    if (action === ACTIONS.instruction) {
      result = 'Instruction';
    } else if (action === ACTIONS.settings) {
      result = 'Settings';
    }

    return result;
  };

  return (
    <div className="tracker-actions-panel">
      {
        instruction
        && <IconButton onClick={() => setActiveAction(ACTIONS.instruction)}>
          <InfoIcon />
        </IconButton>
      }
      {
        settings
        && <IconButton onClick={() => setActiveAction(ACTIONS.settings)}>
          <SettingsIcon />
        </IconButton>
      }
      <Dialog
        classes={{
          paper: 'tracker-actions-popup',
        }}
        open={!!activeAction}
        onClose={handleClose}
      >
        <DialogTitle
          disableTypography
          className="tracker-actions-popup__title"
        >
          <Typography variant="h6">
            {getTitle(activeAction)}
          </Typography>
          <IconButton
            className="tracker-actions-popup__close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {activeAction === ACTIONS.instruction && instruction}
          {activeAction === ACTIONS.settings && settings}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrackerActionsPanel;
