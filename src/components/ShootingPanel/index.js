import StatsPanel from '../StatsPanel';
import { PAGES_ROOTS } from '../../helpers/navigation';

import './index.scss';

export default function ShootingPanel() {
  return (
    <StatsPanel
      title="Shooting"
      viewUrl={PAGES_ROOTS.shooting}
      items={[
        {
          name: 'FT',
          value: '50.25%',
        },
        {
          name: '2PT',
          value: '45%',
        },
        {
          name: '3PT',
          value: '25.19%',
        },
      ]}
    />
  );
};
