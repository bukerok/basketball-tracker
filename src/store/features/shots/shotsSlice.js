import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAll,
  add,
} from './shotsAPI';

const initialState = {
  records: [],
  status: 'idle',
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
      });
  },
});

export const selectRecords = (state) => state.shots.records;

export default shotsSlice.reducer;
