import { useLocation } from 'react-router-dom';

import AddZoneShotPanel from '../containers/AddZoneShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import {
  getRootLink,
  PAGES_ROOTS,
} from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const AddShootingPage = () => {
  const location = useLocation();

  const backUrl = location.fromHomepage
    ? getRootLink(PAGES_ROOTS.homepage)
    : getRootLink(PAGES_ROOTS.shooting);

  return (
    <BaseTemplate
      title="Add Zone Record"
      backUrl={backUrl}
    >
      <AddZoneShotPanel />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default AddShootingPage;
