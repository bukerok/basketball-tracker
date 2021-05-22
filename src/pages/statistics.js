import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ShootingPanel from '../components/ShootingPanel';
import { PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const StatisticsPage = () => {
  return (
    <BaseTemplate>
      <ShootingPanel />
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

export default StatisticsPage;
