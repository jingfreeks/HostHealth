import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {Jobslist} from '@/screens/home/constant';
export const fetchSuggested = createAsyncThunk('pcities/get', async () => {
  // Here you can use axios with your own api
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/cfcd5f2e-97c4-4394-bc20-44db3d53c979',
    );
    return Jobslist;
    // return response.data;
  } catch (error) {
    console.log('errors', error);
  }
});

export const initialState = {
  loading: false,
  data: [],
};
export const suggestedjobs = createSlice({
  name: 'suggestedjobs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSuggested.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchSuggested.fulfilled,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchSuggested.rejected, state => {
      state.loading = false;
    });
  },
});
export default suggestedjobs.reducer;
