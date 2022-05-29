import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';

import './index.scss';

const ButtonInput = ({
  className,
  label,
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className={clsx('button-input', className)}>
      <Typography
        variant="body1"
        className="button-input__label"
      >
        {label}
      </Typography>
      <div className="button-input__control">
        <Button
          aria-label={`${label} increment`}
          variant="outlined"
          onClick={() => onIncrement()}
        >
          <UpIcon />
        </Button>
        <span className="button-input__value"> {value}</span>
        <Button
          aria-label={`${label} decrement`}
          variant="outlined"
          onClick={() => onDecrement()}
        >
          <DownIcon />
        </Button>
      </div>
    </div>
  );
};

export default ButtonInput;
