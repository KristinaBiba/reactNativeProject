import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen } from "./src/Screens/AuthScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreen/LoginScreen";
import { PostScreen } from "./src/Screens/AppScreen/PostsScreen";

const AuthStack = createStackNavigator();

export const useRoute = () => {
  // if () {
  //   return (<AuthStack.Navigator initialRouteName="Login">
  //   <AuthStack.Screen
  //     options={{
  //       headerShown: false,
  //     }}
  //     name="Registration"
  //     component={RegistrationScreen}
  //   />
  //   <AuthStack.Screen
  //     options={{
  //       headerShown: false,
  //     }}
  //     name="Login"
  //     component={LoginScreen}
  //   />
  // </AuthStack.Navigator>)}
  
    return (
      <AuthStack.Navigator>
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
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Posts"
          component={PostScreen}
        />
      </AuthStack.Navigator>
    );
  }