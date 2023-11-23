import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {supabase} from '@/utils/suppabase';
export const SignupPost = createAsyncThunk(
  'signup/post',
  async ({username, password}: {username: string; password: string}) => {
    // Here you can use axios with your own api
    try {
      const {error, data} = await supabase.auth.signUp({
        email: username,
        password: password,
      });
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
export const Signup = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(SignupPost.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      SignupPost.fulfilled,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(SignupPost.rejected, state => {
      state.loading = false;
    });
  },
});
export default Signup.reducer;
