import { authSlice } from "./authSlice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const register =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();

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
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          // await firebase.auth().onAuthStateChanged(function(user) {
          // if (user) {
          // const user = await db.auth().signInWithEmailAndPassword(email, password);
          console.log("user", user);
        }
      );
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };

export const logOut = () => async (dispatch, getState) => {};

export const updateUser = () => async (dispatch, getState) => {};
// export const updateUser = () => async (dispatch, getState) => {};
