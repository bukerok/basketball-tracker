import { useSelector } from 'react-redux';

import { selectShots } from '../../store/features/shots/shotsSlice';
import { calculateStats, formatStat } from '../../helpers/statistics';
import StatsPanel from '../../components/StatsPanel';
import { SHOT_TYPES } from '../../helpers/constants/shooting';
import { TYPE_TO_LABEL_MAP } from '../../helpers/shooting';

import './index.scss';

export default function ShootingPanel() {
  const shots = useSelector(selectShots);
  const stats = calculateStats(shots);

  return (
    <StatsPanel
      items={
        Object.values(SHOT_TYPES)
          .map((type) => {
            return {
              name: TYPE_TO_LABEL_MAP[type],
              value: formatStat(stats[type]),
            };
          })
      }
    />
  );
}
