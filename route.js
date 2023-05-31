import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";

const PostStack = createStackNavigator();
const AuthStack = createStackNavigator();

import { RegistrationScreen } from "./src/Screens/AuthScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreen/LoginScreen";

import { CommentsScreen } from "./src/Screens/PostScreen/CommentsScreen";
import { MapScreen } from "./src/Screens/PostScreen/MapScreen";
import { Home } from "./src/Screens/AppScreen/Home";

import Arrow from "./src/assets/images/svg/arrow-left.svg";


export const useRoute = (isAuth) => {
  // const navigation = useNavigation();

  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <PostStack.Navigator initialRouteName="Home">
      <PostStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <PostStack.Screen
        options={{
          tabBarStyle: { display: "none" },
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 20,
              }}
              // onPress={() => navigation.navigate("DefaultPostScreen")}
            >
              <Arrow />
            </TouchableOpacity>
          ),
          headerBackVisible: true,
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            textAlign: "center",
            color: "#212121",
          },
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
      <PostStack.Screen
        options={{
          headerTitle: "Карта",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 20,
              }}
              // onPress={() => navigation.navigate("CommentsScreen")}
            >
              <Arrow />
            </TouchableOpacity>
          ),
          headerBackVisible: true,
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            textAlign: "center",
            color: "#212121",
          },
        }}
        name="MapScreen"
        component={MapScreen}
      />
    </PostStack.Navigator>
  );
};
