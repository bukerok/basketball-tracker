import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import DebugExport from '../containers/DebugExport';
import DebugImport from '../containers/DebugImport';
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
    </BaseTemplate>
  );
};

export default DebugPage;
