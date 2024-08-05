import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null,userId:null},
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken,userId} = action.payload;
      state.user = user;
      state.token = accessToken;
      state.userId = userId
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});


export const {setCredentials,setLogout}=authSlice.actions

export default authSlice.reducer

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentUser = (state:any)=>state.auth.user
export const selectCurrentUserId=(state:any)=>state.auth.userId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCurrentToken = (state:any)=>state.auth.token