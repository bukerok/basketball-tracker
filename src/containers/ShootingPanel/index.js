import { useSelector } from 'react-redux';

import { selectRecords } from '../../store/features/shots/shotsSlice';
import { calculateStats, formatStat } from '../../helpers/statistics';
import StatsPanel from '../../components/StatsPanel';
import { SHOT_TYPES } from '../../helpers/constants/shooting';
import { PROP_TO_LABEL_MAP } from '../../helpers/shooting';

import './index.scss';

export default function ShootingPanel() {
  const records = useSelector(selectRecords);
  const stats = calculateStats(records);

  return (
    <StatsPanel
      items={
        Object.values(SHOT_TYPES)
          .map((type) => {
            return {
              name: PROP_TO_LABEL_MAP[type],
              value: formatStat(stats[type]),
            };
          })
      }
    />
  );
}
