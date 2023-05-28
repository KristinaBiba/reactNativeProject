import { createSlice } from '@reduxjs/toolkit'
// import { register, logIn, logOut, updateUser} from "./authOperations";

const initialState = {
    user: { name: null, email: null, userId: null },
    // token: null,
    // isLoggedIn: false,
    // isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:
  {},
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
})

export const authReducer = authSlice.reducer;