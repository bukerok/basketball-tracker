import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ShootingPanel from '../containers/ShootingPanel';
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
    </BaseTemplate>
  );
};

export default Homepage;
