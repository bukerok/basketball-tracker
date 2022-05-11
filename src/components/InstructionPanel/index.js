import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';

import './index.scss';

const InstructionPanel = ({
  instruction,
}) => {
  const [opened, setOpened] = useState(false);

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <div className="instruction-panel">
      <IconButton onClick={() => setOpened(true)}>
        <InfoIcon />
      </IconButton>
      <Dialog
        classes={{
          paper: 'instruction-popup',
        }}
        open={opened}
        onClose={handleClose}
      >
        <DialogTitle
          disableTypography
          className="instruction-popup__title"
        >
          <Typography variant="h6">
            Instruction
          </Typography>
          <IconButton
            className="instruction-popup__close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>{instruction}</DialogContent>
      </Dialog>
    </div>
  );
};

export default InstructionPanel;
