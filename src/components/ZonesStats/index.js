import {
  useEffect,
  useState,
} from 'react';

import ZoneStatsSheet from '../../components/ZoneStatsSheet';
import { calculateStat } from '../../helpers/statistics';
import { ReactComponent as Zones } from './zones.svg';

import './index.scss';

const getZoneClass = (value) => {
  let result = 'zone_high';

  // TODO correct coefficients with real world data
  if (value < 50) {
    result = 'zone_low';
  } else if (value < 75) {
    result = 'zone_medium';
  }

  return result;
}

export default function ZonesStats({
  data,
}) {
  const [drawerData, setDrawerData] = useState();

  useEffect(() => {
    const zonesSvg = document.querySelector('.zones-stats__zones');
    const zones = zonesSvg.querySelectorAll('[data-type=zone]');

    zones.forEach((zone) => {
      const svg = zone.querySelector('svg');
      const text = svg.querySelector('text');
      const value = data[zone.dataset.zone];

      if (value) {
        const v = calculateStat(value);

        text.textContent = `${v.toFixed(2)}%`;
        zone.setAttribute('class', getZoneClass(v));
      } else {
        text.textContent = '';
        zone.setAttribute('class', '');
      }
    });
  }, [data]);

  const handleClick = (event) => {
    const group = event.target.parentNode.parentNode;

    if (group.dataset.type !== 'zone') {
      return;
    }

    const { zone } = group.dataset;
    const zoneValue = +zone;

    setDrawerData({
      zone: zoneValue,
      ...data[zoneValue],
    });
  };
  const handleZonesStatsClose = () => {
    setDrawerData();
  };

  return (
    <div className="zones-stats">
      <Zones
        className="zones-stats__zones"
        onClick={handleClick}
      />
      <ZoneStatsSheet
        data={drawerData}
        opened={!!drawerData}
        onClose={handleZonesStatsClose}
      />
    </div>
  );
}
