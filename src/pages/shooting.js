import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ShotsStatsGraph from '../components/ShotsStatsGraph';
import ZoneSelector from '../components/ZoneSelector';
import { PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const ShootingPage = () => {
  return (
    <BaseTemplate>
      <ZoneSelector />
      <ShotsStatsGraph />
      <Fab
        className="fab"
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
