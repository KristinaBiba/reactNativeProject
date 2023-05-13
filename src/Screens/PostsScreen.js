import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import LogOut from "../assets/images/svg/log-out.png";
import UserFoto from "../assets/images/user-foto/Rectangle22.jpg";
import User from "../assets/images/svg/user.png";
import Grid from "../assets/images/svg/grid.png";
import Union from "../assets/images/svg/Union.png";

export const PostScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>

        <TouchableOpacity style={styles.logOutBtn}>
          <Image source={LogOut} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainWrap}>
        <View style={styles.userWrap}>
          <Image style={styles.userFoto} source={UserFoto}></Image>
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.publics}>

        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn}>
          <Image source={Grid} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAdd}>
          <Image source={Union} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Image source={User} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  header: {
    position: "relative",
    paddingBottom: 12,
    marginBottom: 32,
    marginTop: 56,
    paddingGorizontal: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  headerText: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#212121",
  },
  logOutBtn: {
    position: "absolute",
    right: 19,
    bottom: 12,
  },
  mainWrap: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  userWrap: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userFoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  publics: {

  },
  footer: {
    marginTop: -80,
    height: 80,
    paddingTop: 9,
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  btnAdd: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
