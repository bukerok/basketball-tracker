import { useSelector } from 'react-redux';

import ZonesStatsComponent from '../../components/ZonesStats';
import { calculateZoneStats } from '../../helpers/statistics';
import { selectShots } from '../../store/features/shots/shotsSlice';

export default function ZonesStats() {
  const data = calculateZoneStats(useSelector(selectShots));

  return (
    <ZonesStatsComponent data={data} />
  );
}
