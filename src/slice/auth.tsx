import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken} = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});


export const {setCredentials,logout}=authSlice.actions

export default authSlice.reducer

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentUser = (state:any)=>state.auth.user
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentToken = (state:any)=>state.auth.token