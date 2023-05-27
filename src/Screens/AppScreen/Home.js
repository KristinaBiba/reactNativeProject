import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { DefaultScreen } from "../PostScreen/DefaultScreen";

import User from "../../assets/images/svg/user.svg";
import Grid from "../../assets/images/svg/grid.svg";
import Union from "../../assets/images/svg/union.svg";

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
      
    >
      <MainTab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => (
            <Grid width={24} height={24} />
          ),
        }}
        name="DefaultPostScreen"
        component={DefaultScreen}
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
          tabBarStyle: {display: 'none'},
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

