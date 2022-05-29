import TrackerActionsPanel from '../components/TrackerActionsPanel';
import ZoneTrackerInstruction from '../components/Instructions/ZoneTrackerInstruction';
import ShotsInputSettings from '../components/ShotsInputSettings';
import AddZoneShotPanel from '../containers/AddZoneShotPanel';
import NotificationsPanel from '../containers/NotificationsPanel';
import { getRootLink, PAGES_ROOTS } from '../helpers/navigation';
import BaseTemplate from './baseTemplate';
import { LOCAL_STORAGE_KEY } from '../helpers/constants/zoneTracker';
import useShotsInputSettings from '../hooks/useShotsInputSettings';

const ZoneTracker = () => {
  // lifted up here to notify about change both ShotsInputSettings and AddZoneShotPanel
  // otherwise need to introduce storage listening mechanism to notify AddZoneShotPanel about changes
  const [settings, setSettings] = useShotsInputSettings(LOCAL_STORAGE_KEY);

  return (
    <BaseTemplate
      title="Zone Tracker"
      backUrl={getRootLink(PAGES_ROOTS.homepage)}
    >
      <TrackerActionsPanel
        instruction={<ZoneTrackerInstruction />}
        settings={
          <ShotsInputSettings
            settings={settings}
            onSettingsUpdate={setSettings}
          />
        }
      />
      <AddZoneShotPanel inputType={settings.inputType} />
      <NotificationsPanel />
    </BaseTemplate>
  );
};

export default ZoneTracker;