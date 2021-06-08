import {
  useDispatch,
  useSelector,
} from 'react-redux';
import Alert from '@material-ui/lab/Alert';

import {
  remove,
  selectNotificaions,
  timeoutRemove,
} from '../../store/features/notifications/notificationsSlice';

import './index.scss';

export default function NotificationsPanel() {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotificaions);

  return (
    <div className="notifications-panel">
      {notifications.map((notification) => {
        dispatch(timeoutRemove(notification.id));

        return (
          <Alert
            key={notification.id}
            severity={notification.type}
            className="notification"
            variant="outlined"
            onClose={() => dispatch(remove(notification.id))}
          >
            {notification.message}
          </Alert>
        );
      })}
    </div>
  );
};
