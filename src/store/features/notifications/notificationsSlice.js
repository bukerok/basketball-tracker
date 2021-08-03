import {
  createAsyncThunk,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  timeoutIds: [],
};

export const timeoutRemove = createAsyncThunk(
  'notifications/timeoutRemove',
  async (payload) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    return payload;
  },
  {
    condition: (payload, { getState }) => {
      const { timeoutIds } = getState().notifications;

      if (timeoutIds.includes(payload)) {
        return false;
      }
    },
  },
);

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addError: {
      reducer: (state, action) => {
        state.notifications.push(action.payload);
      },
      prepare: (message) => {
        return {
          payload: {
            message,
            type: 'error',
            id: nanoid(),
          },
        };
      },
    },
    addSuccess: {
      reducer: (state, action) => {
        state.notifications.push(action.payload);
      },
      prepare: (message) => {
        return {
          payload: {
            message,
            type: 'success',
            id: nanoid(),
          },
        };
      },
    },
    remove: (state, action) => {
      state.notifications = state.notifications.filter((notification) => {
        return notification.id !== action.payload;
      });
    },
  },
  extraReducers: {
    [timeoutRemove.pending]: (state, action) => {
      state.timeoutIds.push(action.meta.arg);
    },
    [timeoutRemove.fulfilled]: (state, action) => {
      state.notifications = state.notifications.filter((notification) => {
        return notification.id !== action.payload;
      });
      state.timeoutIds = state.timeoutIds.filter((notification) => {
        return notification.id !== action.payload;
      });
    },
  },
});

export const selectNotificaions = (state) => state.notifications.notifications;

export const {
  addError,
  addSuccess,
  remove,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
