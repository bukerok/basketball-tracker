import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ShotsStatsGraph from '../containers/ShotsStatsGraph';
import LastRecordsTable from '../containers/LastRecordsTable';
import { PAGES_ROOTS } from '../helpers/navigation';
import { setupRecords } from '../store/features/shots/shotsSlice';
import BaseTemplate from './baseTemplate';

const ShootingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupRecords());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BaseTemplate>
      <ShotsStatsGraph />
      <LastRecordsTable />
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
