import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './baseTemplate.scss';

export default function BaseTemplate({
  children,
  title,
  backUrl,
}) {
  return (
    <div className="base-template">
      <AppBar position="sticky">
        <Toolbar>
          {
            backUrl
            && <IconButton
              component={Link}
              to={backUrl}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="base-template__content">
        {children}
      </div>
    </div>
  );
};
