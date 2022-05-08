import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { getRootLink, PAGES_ROOTS } from '../../helpers/navigation';
import InfoItem from '../InfoItem';

import './index.scss';

export default function StatsPanel({
  items = [],
}) {
  return (
    <div className="stats-panel">
      <Typography
        variant="h4"
        className="stats-panel__title"
      >
        Shooting
      </Typography>
      <div className="stats-panel__values">
        {items.map((item) => {
          const {
            name,
            value,
          } = item;

          return (
            <InfoItem
              key={name}
              title={name}
              value={value}
            />
          );
        })}
      </div>
      <Link
        className="stats-panel__link"
        to={getRootLink(PAGES_ROOTS.statistics)}
      >
        View details
      </Link>
    </div>
  );
}
