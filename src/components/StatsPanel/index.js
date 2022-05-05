import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/Visibility';

import './index.scss';

export default function StatsPanel({
  title,
  viewUrl,
  items = [],
}) {
  return (
    <Card className="stats-panel">
      <CardHeader
        className="stats-panel__header"
        title={<Typography variant="h6">{title}</Typography>}
        action={
          <Fragment>
            <IconButton
              component={Link}
              to={viewUrl}
            >
              <ViewIcon />
            </IconButton>
          </Fragment>
        }
      />
      <CardContent className="stats-panel__info-container">
        {items.map((item) => {
          const {
            name,
            value,
          } = item;

          return (
            <div
              className="info"
              key={name}
            >
              <Typography
                variant="subtitle1"
                className="info__title"
              >{name}</Typography>
              <Typography variant="body1">{value}</Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
