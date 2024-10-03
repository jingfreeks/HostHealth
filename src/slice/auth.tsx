import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null,refreshToken:null,userId:null,roles:[],onBoarding:false},
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken,userId,roles,isOnBoarding,refreshToken} = action.payload;
      state.user = user;
      state.token = accessToken;
      state.refreshToken=refreshToken
      state.userId = userId;
      state.roles=roles;
      state.onBoarding=isOnBoarding;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
      state.refreshToken=null;
      state.roles=[]
      state.onBoarding=false;
    },
  },
});


export const {setCredentials,setLogout}=authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state:any)=>state.auth.user
export const selectCurrentUserId=(state:any)=>state.auth.userId
export const selectCurrentToken = (state:any)=>state.auth.token
export const selectCurrentAuth=(state:any)=>state.auth
export const selectUserRoles=(state:any)=>state.auth.roles