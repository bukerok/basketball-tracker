import AddZoneShotPanel from '../containers/AddZoneShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import {
  getRootLink,
  PAGES_ROOTS,
} from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const AddShootingPage = () => {
  return (
    <BaseTemplate
      title="Add Zone Record"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <AddZoneShotPanel />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default AddShootingPage;
