import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Background } from "../components/Background";
import { UserFoto } from "../components/UserFoto";

import LogOut from "../assets/images/svg/log-out.svg";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={styles.form}>
        <UserFoto />
        <TouchableOpacity style={styles.logOutBtn} onPress={() => navigation.navigate("Login")}>
          <LogOut />
        </TouchableOpacity>
        <Text style={styles.title}>Natali Romanova</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  form: {
    position: 'relative',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 60,
    flex:0.9,
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
    // marginTop: 32,
  },
  logOutBtn: {
    position: "absolute",
    right: 19,
    top: 21,
    width: 24,
    // zIndex: 1000,
  },
});
