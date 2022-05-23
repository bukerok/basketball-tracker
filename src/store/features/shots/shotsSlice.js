import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import shotFactory from '../../../helpers/functions/shotFactory';
import { addError } from '../notifications/notificationsSlice';
import {
  getAll,
  add,
  remove,
} from './shotsAPI';

const initialState = {
  records: [],
  status: 'idle',
};

export const noShotsError = () => (dispatch) => {
  dispatch(addError('No shots data.'));
};

export const setupRecords = createAsyncThunk(
  'shots/setupRecords',
  async () => {
    const records = await getAll();

    return records;
  },
  {
    condition: (payload, { getState }) => {
      const { status } = getState().shots;

      if (status === 'loading' || status === 'fetched') {
        return false;
      }
    },
  },
);

export const addRecord = createAsyncThunk(
  'shots/addRecord',
  async (record) => {
    const recordWithDate = {
      ...record,
      date: (new Date()).toISOString(),
    };

    await add(recordWithDate);

    return recordWithDate;
  },
);

export const removeRecord = createAsyncThunk(
  'shots/removeRecord',
  async (date) => {
    const key = date.toISOString();

    await remove(key);

    return key;
  },
);

export const shotsSlice = createSlice({
  name: 'shots',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setupRecords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setupRecords.fulfilled, (state, action) => {
        state.status = 'fetched';
        state.records = action.payload;
      })
      .addCase(addRecord.fulfilled, (state, action) => {
        state.records.push(action.payload);
      })
      .addCase(removeRecord.fulfilled, (state, action) => {
        state.records = state.records.filter(({ date }) => {
          return date !== action.payload;
        });
      });
  },
});

const selectRawShots = ({ shots }) => shots.records;

export const selectShots = createSelector(
  selectRawShots,
  (rawShots) => {
    return rawShots.map((rawShot) => {
      return shotFactory(rawShot);
    });
  },
);

export const selectLast5Shots = createSelector(
  selectShots,
  (records) => {
    return records.slice(Math.max(records.length - 5, 0))
      .reverse();
  },
);

export default shotsSlice.reducer;
