import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { TYPE_TO_LABEL_MAP } from '../../helpers/shooting';
import { SHOT_TYPES } from '../../helpers/constants/shooting';

import './index.scss';

const TypeSelector = ({
  value,
  onChange,
}) => {
  return (
    <div className="type-selector">
      <RadioGroup
        className="type-selector__options"
        aria-labelledby="typeSelectorLabel"
        name="position"
        value={value}
        onChange={(_event, v) => onChange(v)}
      >
        {Object.values(SHOT_TYPES).map((type) => {
          return (
            <FormControlLabel
              className={clsx('type-selector__option', {
                'type-selector__option_active': type === value,
              })}
              key={type}
              value={type}
              control={<Radio />}
              label={TYPE_TO_LABEL_MAP[type]}
              labelPlacement="top"
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default TypeSelector;