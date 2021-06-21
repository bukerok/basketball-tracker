import { useSelector } from 'react-redux';

import { selectRecords } from '../../store/features/shots/shotsSlice';
import { calculateStats, formatStat } from '../../helpers/statistics';
import StatsPanel from '../../components/StatsPanel';
import { PAGES_ROOTS } from '../../helpers/navigation';

import './index.scss';

export default function ShootingPanel() {
  const records = useSelector(selectRecords);
  const stats = calculateStats(records);

  return (
    <StatsPanel
      title="Shooting"
      viewUrl={PAGES_ROOTS.shooting}
      items={[
        {
          name: 'FT',
          value: formatStat(stats.ft),
        },
        {
          name: '2PT',
          value: formatStat(stats['2pt']),
        },
        {
          name: '3PT',
          value: formatStat(stats['3pt']),
        },
      ]}
    />
  );
};
