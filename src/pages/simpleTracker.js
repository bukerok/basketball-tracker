import InstructionPanel from '../components/InstructionPanel';
import SimpleTrackerInstruction from '../components/Instructions/SimpleTrackerInstruction';
import AddSimpleShotPanel from '../containers/AddSimpleShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';

const SimpleTracker = () => {
  return (
    <BaseTemplate
      title="Simple Tracker"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <InstructionPanel
        instruction={<SimpleTrackerInstruction />}
      />
      <AddSimpleShotPanel />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default SimpleTracker;