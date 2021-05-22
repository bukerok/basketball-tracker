import ShotsStatsGraph from '../components/ShotsStatsGraph';
import ZonesPanel from '../components/ZonesPanel';
import BaseTemplate from './baseTemplate';

const ShootingPage = () => {
  return (
    <BaseTemplate>
      <ZonesPanel />
      <ShotsStatsGraph />
    </BaseTemplate>
  );
};

export default ShootingPage;
