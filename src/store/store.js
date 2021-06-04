import { configureStore } from '@reduxjs/toolkit';
import shotsReducer from './features/shots/shotsSlice';
import notificationsReducer from './features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    shots: shotsReducer,
    notifications: notificationsReducer,
  },
});
