import { ReactComponent as Zones } from './zones.svg';

import './index.scss';

export default function ZoneSelector({
  onChange,
}) {
  const handleClick = (event) => {
    const group = event.target.parentNode;

    if (group.dataset.type !== 'zone') {
      return;
    }

    const { zone } = group.dataset;

    group.parentNode.querySelectorAll('g[data-type="zone"]')
      .forEach((el) => {
        if (el.dataset.zone === zone) {
          el.classList.remove('disabled');
        } else {
          el.classList.add('disabled');
        }
      });

    onChange(+zone);
  };

  return (
    <div className="zone-selector">
      <Zones
        className="zone-selector__image"
        onClick={handleClick}
      />
    </div>
  );
};
