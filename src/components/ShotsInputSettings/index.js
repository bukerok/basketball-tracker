import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { SHOTS_INPUTS } from '../../helpers/constants/shotsInputs';

import './index.scss';

const ShotsInputSettings = ({
  settings,
  onSettingsUpdate,
}) => {
  const handleInputTypeChange = (event) => {
    onSettingsUpdate({
      ...settings,
      inputType: event.target.value,
    });
  };

  return (
    <div className="shots-input-settings">
      <div className="shots-input-settings__control">
        <label
          className="shots-input-settings__label"
          htmlFor="inputTypeSelect"
        >
          Input Type:
        </label>
        <Select
          id="inputTypeSelect"
          variant="outlined"

          value={settings.inputType}
          onChange={handleInputTypeChange}
        >
          <MenuItem value={SHOTS_INPUTS.text}>Text input</MenuItem>
          <MenuItem value={SHOTS_INPUTS.button}>Button input</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default ShotsInputSettings;
