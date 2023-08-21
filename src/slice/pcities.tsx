import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {PopularListData} from '@/screens/home/constant';

import {useDispatch} from 'react-redux';

export const fetchPCities = createAsyncThunk('pcities/get', async () => {
  // Here you can use axios with your own api
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/cfcd5f2e-97c4-4394-bc20-44db3d53c979',
    );

    return PopularListData;
    // return response.data;
  } catch (error) {
    console.log('errors', error);
  }
});

export const pcities = createSlice({
  name: 'pcities',
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPCities.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPCities.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPCities.rejected, state => {
      state.loading = false;
    });
  },
});

export default pcities.reducer;
