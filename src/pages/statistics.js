import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ShotsStatsGraph from '../containers/ShotsStatsGraph';
import ZonesStats from '../containers/ZonesStats';
import LastRecordsTable from '../containers/LastRecordsTable';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import { setupRecords } from '../store/features/shots/shotsSlice';
import BaseTemplate from './baseTemplate';

const ShootingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setupRecords());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BaseTemplate
      title="Shooting"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <ZonesStats />
      <ShotsStatsGraph />
      <LastRecordsTable />
    </BaseTemplate>
  );
};

export default ShootingPage;
