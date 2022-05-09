import TrackersPanelComp from '../../components/TrackersPanel';
import { getRootLink, PAGES_ROOTS } from '../../helpers/navigation';

const TrackersPanel = () => {
  return (
    <TrackersPanelComp
      trackers={[
        {
          id: 'simpleTracker',
          name: 'Simple Tracker',
          tags: [
            'manual',
          ],
          url: getRootLink(PAGES_ROOTS.simpleTracker),
        },
        {
          id: 'zoneTracker',
          name: 'Zone Tracker',
          tags: [
            'manual',
          ],
          url: getRootLink(PAGES_ROOTS.zoneTracker),
        },
      ]}
    />
  );
};

export default TrackersPanel;
