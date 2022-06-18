import { useState } from 'react';
import { useSelector } from 'react-redux';

import ZonesStatsComponent from '../../components/ZonesStats';
import ZoneStatsSheet from '../../components/ZoneStatsSheet';
import { calculateZoneStats } from '../../helpers/statistics';
import { selectShots } from '../../store/features/shots/shotsSlice';

export default function ZonesStats() {
  const [drawerData, setDrawerData] = useState(null);
  const data = calculateZoneStats(useSelector(selectShots));

  const handleZoneSelect = (zone) => {
    setDrawerData({
      zone,
      ...data[zone],
    });
  };

  const handleZonesStatsClose = () => {
    setDrawerData(null);
  };

  return (
    <>
      <ZonesStatsComponent
        data={data}
        onZoneSelect={handleZoneSelect}
      />
      <ZoneStatsSheet
        data={drawerData}
        opened={!!drawerData}
        onClose={handleZonesStatsClose}
      />
    </>
  );
}
