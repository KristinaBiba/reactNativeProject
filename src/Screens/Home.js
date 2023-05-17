import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

import User from "../assets/images/svg/user.svg";
import Grid from "../assets/images/svg/grid.svg";
import Union from "../assets/images/svg/Union.svg";

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          marginTop: -80,
          height: 80,
          paddingTop: 9,
          paddingBottom: 25,
          borderTopColor: "#BDBDBD",
          borderTopWidth: 1,
          justifyContent: "space-around",
          flexDirection: "row",
          paddingHorizontal: 50,
          alignItems: "center",
        },
      })}
      tabBarOptions={{
        activeTintColor: "rgba(255, 255, 255, 1)",
        inactiveTintColor: "rgba(33, 33, 33, 0.8)",
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => (
            <Grid width={24} height={24} />
          ),
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarItemStyle: {
            width: 70,
            height: 40,
            backgroundColor: "#FF6C00",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Union width={13} height={13} />
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <User width={24} height={24} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

