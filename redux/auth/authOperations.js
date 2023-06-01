import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  getAuth, 
  signOut, 
} from "firebase/auth";
import { authSlice } from "./authSlice";

const auth = getAuth();

export const register =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const { uid, displayName } = await auth.currentUser;

      dispatch(
        authSlice.actions.updateUserProfile({ userId: uid, name: displayName })
      );
    } catch (error) {
      console.log("error", error);

      console.log("error.message", error.message);
    }
  };

export const logIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          dispatch(authSlice.actions.logInUser(userCredential._tokenResponse));
        });
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };

export const logOut = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.userLogOut());
  } catch (error) {
    console.log("error.message", error.message);
  }

};

export const updateUser = () => async (dispatch, getState) => {};

export const userStateChanged = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            name: user.displayName,
          })
        );
        dispatch(authSlice.actions.isLoggedIn(true));
      } 
        
    });
  } catch (error) {
    console.log("error.message", error.message);
  }
};
