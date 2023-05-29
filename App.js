import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useRoute } from "./route";

import { store } from "./redux/store";

export default function App() {
  const [user, setUser] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>{routing}</NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
