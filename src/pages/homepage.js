import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ShootingPanel from '../containers/ShootingPanel';
import { PAGES_ROOTS } from '../helpers/navigation';
import { setupRecords } from '../store/features/shots/shotsSlice';
import BaseTemplate from './baseTemplate';
import TrackersPanel from '../containers/TrackersPanel';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupRecords());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BaseTemplate title="Homepage">
      <ShootingPanel />
      <TrackersPanel />
      <Fab
        className="fab"
        color="primary"
        component={Link}
        to={{
          pathname: PAGES_ROOTS.addShooting,
          fromHomepage: true,
        }}
      >
        <AddIcon />
      </Fab>
    </BaseTemplate>
  );
};

export default Homepage;