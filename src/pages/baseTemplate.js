import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './baseTemplate.scss';

export default function BaseTemplate({
  children,
  title,
}) {
  return (
    <div className="base-template">
      <AppBar position="sticky">
        <Toolbar>{title}</Toolbar>
      </AppBar>
      <div className="base-template__content">
        {children}
      </div>
    </div>
  );
};
