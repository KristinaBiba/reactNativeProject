// import { TouchableOpacity } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";

// import { CommentsScreen } from "../PostScreen/CommentsScreen";
// import { MapScreen } from "../PostScreen/MapScreen";
// import { Home } from "./Home";

// import Arrow from "../../assets/images/svg/arrow-left.svg";

// const PostStack = createStackNavigator();

// export const PostScreen = ({ navigation: { goBack } }) => {
//   const navigation = useNavigation();
//   return (
//     <PostStack.Navigator>
//       <PostStack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Home"
//         component={Home}
//       />
//       <PostStack.Screen
//         options={{
//           tabBarStyle: {display: 'none'},
//           headerTitle: "Коментарі",
//           headerTitleAlign: "center",
//           headerBackTitleVisible: false,
//           headerLeft: () => (
//             <TouchableOpacity
//               style={{
//                 marginLeft: 20,
//               }}
//               onPress={() => navigation.navigate("DefaultPostScreen")}
//             >
//               <Arrow />
//             </TouchableOpacity>
//           ),
//           headerBackVisible: true,
//           headerTitleStyle: {
//             fontFamily: "Roboto-Medium",
//             fontSize: 17,
//             lineHeight: 22,
//             letterSpacing: -0.408,
//             textAlign: "center",
//             color: "#212121",
//           },
//         }}
//         name="CommentsScreen"
//         component={CommentsScreen}
//       />
//       <PostStack.Screen
//         options={{
//           headerTitle: "Карта",
//           headerTitleAlign: "center",
//           headerBackTitleVisible: false,
//           headerLeft: () => (
//             <TouchableOpacity
//               style={{
//                 marginLeft: 20,
//               }}
//               onPress={() => navigation.navigate("DefaultPostScreen")}
//             >
//               <Arrow />
//             </TouchableOpacity>
//           ),
//           headerBackVisible: true,
//           headerTitleStyle: {
//             fontFamily: "Roboto-Medium",
//             fontSize: 17,
//             lineHeight: 22,
//             letterSpacing: -0.408,
//             textAlign: "center",
//             color: "#212121",
//           },
//         }}
//         name="MapScreen"
//         component={MapScreen}
//       />
//     </PostStack.Navigator>
//   );
// };
