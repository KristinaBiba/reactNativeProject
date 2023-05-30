import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null, 
  email: null, 
  userId: null,
  photoURL: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
      photoURL: payload.photoURL,
    }),
    isLoggedIn: (state, {payload}) => ({
      ...state,
      isLoggedIn: payload,
    }),
    userLogOut: (state) => {
      initialState
    }
  },  
});

