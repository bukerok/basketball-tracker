import Divider from '@material-ui/core/Divider';

import DebugExport from '../containers/DebugExport';
import DebugImport from '../containers/DebugImport';
import BaseTemplate from './baseTemplate';

const DebugPage = () => {
  return (
    <BaseTemplate>
      <DebugExport />
      <Divider />
      <DebugImport />
    </BaseTemplate>
  );
};

export default DebugPage;
