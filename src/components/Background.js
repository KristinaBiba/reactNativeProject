import BgImage from "../assets/images/bg-img/PhotoBG.jpg";

import {
    ImageBackground, StyleSheet
  } from "react-native";

export const Background = ({children}) => {
    return (<ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>{children}</ImageBackground>)
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "flex-end",
    },})