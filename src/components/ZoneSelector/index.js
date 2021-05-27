import TextField from '@material-ui/core/TextField';

import zones from './mock-zones.png';

import './index.scss';

export default function ZoneSelector({
  value,
  onChange,
}) {
  const handleChange = (event) => {
    const v = parseInt(event.target.value) || 1;

    onChange(v);
  };

  return (
    <div className="zone-selector">
      <img
        className="zone-selector__image"
        src={zones}
        alt="Zones"
      />
      <TextField
        className="zone-selector__input"
        inputProps={{
          min: 1,
          max: 15,
        }}
        value={value}
        type="number"
        label="Zone"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};
