import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { auth, db, storage } from "../../config";

import { useRoute } from "../../route";
import { userStateChanged } from "../../redux/auth/authOperations";

export const Main = () => {

  const {isLoggedIn} = useSelector((state) => state);
  console.log(isLoggedIn);
  // const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userStateChanged());
  }, []);

  const routing = useRoute(isLoggedIn);

  return (
    
      <NavigationContainer>{routing}</NavigationContainer>

  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
// });
