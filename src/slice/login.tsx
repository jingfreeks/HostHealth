import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {supabase} from '@/utils/suppabase';

export const LoginPost = createAsyncThunk(
  'login/post',
  async ({email, password}: {email: string; password: string}) => {
    // Here you can use axios with your own api
    try {
      const {error, data} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log('error', error, data);
      if (error) {
        throw error;
      }
      return data;
      // return response.data;
    } catch (error) {
      console.log('errors', error);
    }
  },
);

export const initialState = {
  loading: false,
  data: [],
};
export const Login = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(LoginPost.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      LoginPost.fulfilled,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(LoginPost.rejected, state => {
      state.loading = false;
    });
  },
});
export default Login.reducer;
