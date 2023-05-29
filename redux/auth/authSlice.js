import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, updateUser} from "./authOperations";

const initialState = {
  name: null, 
  email: null, 
  userId: null,
  
  // token: null,
  isLoggedIn: false,
  // isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
    }),
    isLoggedIn: (state, {payload}) => ({
      ...state,
      isLoggedIn: payload,
    })
  },
  //   extraReducers: {
  //     [register.fulfilled](state, action) {
  //       state.user = action.payload;
  //     //   state.token = action.payload.token;
  //     //   state.isLoggedIn = true;
  //     },
  //     [logIn.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //     //   state.token = action.payload.token;
  //     //   state.isLoggedIn = true;
  //     },
  //     [logOut.fulfilled](state) {
  //       state.user = { name: null, email: null };
  //     //   state.token = null;
  //     //   state.isLoggedIn = false;
  //     },
  //     [updateUser.pending](state) {
  //     //   state.isRefreshing = true;
  //     },
  //     [updateUser.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //     //   state.isLoggedIn = true;
  //     //   state.isRefreshing = false;
  //     },
  //     [updateUser.rejected](state) {
  //     //   state.isRefreshing = false;
  //     //   state.token = null;
  //     },
  //   },
});

// export const authReducer = authSlice.reducer;
