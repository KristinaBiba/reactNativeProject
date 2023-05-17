import AddFoto from "../assets/images/svg/addFoto.svg";

import { Image, View, TouchableOpacity, StyleSheet } from "react-native";

export const UserFoto = () => {
  return (
    <View style={styles.fotoWrap}>
      <Image style={styles.userFoto}></Image>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
        <AddFoto />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fotoWrap: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginTop: -60,
    marginBottom: 32,
    width: 120,
  },
  userFoto: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 15,
    right: -12,
  },
});
