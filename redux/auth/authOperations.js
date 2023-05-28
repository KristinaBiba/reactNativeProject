import { authReducer } from "./authSlice";
import {db, auth} from "../../config";

export const register = ({ email, password, name }) => async (
  dispatch,
  getState
) => {
  try {

    const { user } = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch(authReducer.actions.updateUserProfile({ userId: user.uid }));
    console.log("user", user);
  } catch (error) {
    console.log("error", error);

    console.log("error.message", error.message);
  }
};

export const logIn = ({ email, password }) => async (
  dispatch,
  
) => {
  try {
    const user = await db.auth().signInWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
  }
};

export const logOut = () => async (dispatch, ) => {};


export const updateUser = () => async (dispatch, ) => {};