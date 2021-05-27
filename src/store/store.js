import { configureStore } from '@reduxjs/toolkit';
import shotsReducer from './features/shots/shotsSlice';

export const store = configureStore({
  reducer: {
    shots: shotsReducer,
  },
});
