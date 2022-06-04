import {
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import ZoneStatsSheet from '../../components/ZoneStatsSheet';
import { calculateStat, calculateZoneStats } from '../../helpers/statistics';
import { selectShots } from '../../store/features/shots/shotsSlice';
import { ReactComponent as Zones} from './zones.svg';

import './index.scss';

const getZoneClass = (value) => {
  let result = 'zone_high';

  if (value < 50) {
    result = 'zone_low';
  } else if (value < 75) {
    result = 'zone_medium';
  }

  return result;
}

export default function ZonesStats() {
  const [drawerData, setDrawerData] = useState();
  const data = calculateZoneStats(useSelector(selectShots));

  useEffect(() => {
    const zonesSvg = document.querySelector('.zones-stats__zones');

    if (!zonesSvg) {
      return;
    }

    const zones = zonesSvg.querySelectorAll('[data-type=zone]');

    zones.forEach((zone) => {
      const svg = zone.querySelector('svg');
      const text = svg.querySelectorAll('text');
      const value = data[zone.dataset.zone];

      if (value) {
        const v = calculateStat(value);
        const textV = `${v.toFixed(2)}%`;

        text.forEach((t) => {
          t.textContent = textV;
        });
        svg.setAttribute('class', getZoneClass(v));
      } else {
        text.forEach((t) => {
          t.textContent = '-';
        });
        svg.setAttribute('class', '');
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
