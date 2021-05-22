import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ShotsStatsGraph from '../components/ShotsStatsGraph';
import ZonesPanel from '../components/ZonesPanel';
import { PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const ShootingPage = () => {
  return (
    <BaseTemplate>
      <ZonesPanel />
      <ShotsStatsGraph />
      <Fab
        className="fab fab_centered"
        color="primary"
        component={Link}
        to={PAGES_ROOTS.addShooting}
      >
        <AddIcon />
      </Fab>
    </BaseTemplate>
  );
};

export default ShootingPage;
