import {
  useEffect,
  useRef,
} from 'react';

import { ReactComponent as Zones } from './zones.svg';

import './index.scss';

export default function ZoneSelector({
  activeZone,
  onChange = () => {},
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    svgRef.current?.querySelectorAll('g[data-type="zone"]')
      .forEach((el) => {
        const zone = +el.dataset.zone;

        if (zone === activeZone) {
          el.classList.remove('disabled');
          el.classList.add('active');
        } else {
          el.classList.add('disabled');
          el.classList.remove('active');
        }
      });
  }, [activeZone]);

  const handleClick = (event) => {
    const group = event.target.parentNode;

    if (group.dataset.type !== 'zone') {
      return;
    }

    onChange(+group.dataset.zone);
  };

  return (
    <div className="zone-selector">
      <Zones
        ref={svgRef}
        className="zone-selector__image"
        onClick={handleClick}
      />
    </div>
  );
}
