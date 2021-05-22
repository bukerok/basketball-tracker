import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ViewIcon from '@material-ui/icons/Visibility';

import { PAGES_ROOTS } from '../../helpers/navigation';

import './index.scss';

export default function ShootingPanel() {
  return (
    <Card className="shooting-panel">
      <CardHeader
        className="shooting-panel__header"
        title={<Typography variant="h6">Shooting</Typography>}
        action={
          <Fragment>
            <IconButton
              component={Link}
              to={PAGES_ROOTS.shooting}
            >
              <ViewIcon />
            </IconButton>
            <IconButton disabled>
              <ShareIcon />
            </IconButton>
          </Fragment>
        }
      />
      <CardContent>
        <div className="shooting-panel__info-container">
          <div className="info">
            <Typography
              variant="subtitle1"
              className="info__title"
            >FT</Typography>
            <Typography variant="body1">50.15%</Typography>
          </div>
          <div className="info">
            <Typography
              variant="subtitle1"
              className="info__title"
            >2PT</Typography>
            <Typography variant="body1">45%</Typography>
          </div>
          <div className="info">
            <Typography
              variant="subtitle1"
              className="info__title"
            >3PT</Typography>
            <Typography variant="body1">25.19%</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
