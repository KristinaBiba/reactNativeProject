import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useFonts } from "expo-font";

import { store, persistor } from "./redux/store";

import { Main } from "./src/components/Main";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
