import InstructionPanel from '../components/InstructionPanel';
import ZoneTrackerInstruction from '../components/ZoneTrackerInstruction';
import AddZoneShotPanel from '../containers/AddZoneShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const ZoneTracker = () => {
  return (
    <BaseTemplate
      title="Zone Tracker"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <InstructionPanel
        instruction={<ZoneTrackerInstruction />}
      />
      <AddZoneShotPanel />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default ZoneTracker;