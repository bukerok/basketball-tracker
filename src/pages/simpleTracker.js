import TrackerActionsPanel from '../components/TrackerActionsPanel';
import SimpleTrackerInstruction from '../components/Instructions/SimpleTrackerInstruction';
import ShotsInputSettings from '../components/ShotsInputSettings';
import AddSimpleShotPanel from '../containers/AddSimpleShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import { LOCAL_STORAGE_KEY } from '../helpers/constants/simpleTracker';
import BaseTemplate from './baseTemplate';
import useShotsInputSettings from '../hooks/useShotsInputSettings';

const SimpleTracker = () => {
  // lifted up here to notify about change both ShotsInputSettings and AddSimpleShotPanel
  // otherwise need to introduce storage listening mechanism to notify AddSimpleShotPanel about changes
  const [settings, setSettings] = useShotsInputSettings(LOCAL_STORAGE_KEY);

  return (
    <BaseTemplate
      title="Simple Tracker"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <TrackerActionsPanel
        instruction={<SimpleTrackerInstruction />}
        settings={
          <ShotsInputSettings
            settings={settings}
            onSettingsUpdate={setSettings}
          />
        }
      />
      <AddSimpleShotPanel inputType={settings.inputType} />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default SimpleTracker;