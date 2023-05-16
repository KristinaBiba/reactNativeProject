import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostScreen } from "./src/Screens/PostsScreen";
import { CreatePostsScreen } from "./src/Screens/CreatePostsScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen";
import { Home } from "./src/Screens/Home";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    // <Home>
    <MainTab.Navigator>
      <MainTab.Screen options={{
            headerShown: false,
          }} name="Posts" component={PostScreen} />
      <MainTab.Screen options={{
            headerShown: false,
          }} name="Create" component={CreatePostsScreen} />
      <MainTab.Screen options={{
            headerShown: false,
          }} name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
    // </Home>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const routing = useRoute({});

  return (
    <View style={styles.container}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
