import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import TrackerGridItem from '../TrackerGridItem';

import './index.scss';

const TrackersPanel = ({
  trackers,
}) => {
  return (
    <div className="trackers-panel">
      <Typography
        gutterBottom
        variant="h4"
        className="trackers-panel__title"
      >
        Trackers
      </Typography>
      <div className="trackers-panel__content">
        {trackers.map((tracker) => {
          return (
            <Link
              className="trackers-panel__item"
              key={tracker.id}
              to={tracker.url}
            >
              <TrackerGridItem tracker={tracker} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TrackersPanel;
