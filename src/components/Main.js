import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from '../../utils/RootNavigation';
import { auth, db, storage } from "../../config";

import { useRoute } from "../../route";
import { userStateChanged } from "../../redux/auth/authOperations";

export const Main = () => {

  const {isLoggedIn} = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userStateChanged());
  }, []);

  const routing = useRoute(isLoggedIn);

  return (
      <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
  );
};
