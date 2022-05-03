import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import DebugExport from '../containers/DebugExport';
import DebugImport from '../containers/DebugImport';
import NotificationsPanel from '../containers/NotificationsPanel';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const DebugPage = () => {
  return (
    <BaseTemplate>
      <Typography
        variant="h2"
        gutterBottom
      >
        Debug page
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
      >
        For developers use only!
      </Typography>
      <Divider />
      <DebugExport />
      <Divider />
      <DebugImport />
      <Link to={getRootLink(PAGES_ROOTS.homepage)}>Go to application.</Link>
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default DebugPage;
