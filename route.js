import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { Home } from "./src/Screens/Home";

const AuthStack = createStackNavigator();

export const useRoute = () => {
  
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
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }