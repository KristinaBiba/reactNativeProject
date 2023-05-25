import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "../PostScreen/DefaultScreen";
import { CommentsScreen } from "../PostScreen/CommentsScreen";
import { MapScreen } from "../PostScreen/MapScreen";

const PostStack = createStackNavigator();

export const PostScreen = () => {

  
  return (
  // initialRouteName="DefaultPostScreen"
  <PostStack.Navigator >
    <PostStack.Screen
      options={{
        headerShown: false,
      }}
      name="DefaultPostScreen"
      component={DefaultScreen}
    />
    <PostStack.Screen
      // options={{
      //   headerShown: false,
      // }}
      name="CommentsScreen"
      component={CommentsScreen}
    />
    <PostStack.Screen
      // options={{
      //   headerShown: false,
      // }}
      name="MapScreen"
      component={MapScreen}
    />
  </PostStack.Navigator>)
};
