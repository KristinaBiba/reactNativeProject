import BgImage from "../assets/images/bg-img/PhotoBG.jpg";

import { ImageBackground, StyleSheet, Dimensions } from "react-native";

export const Background = ({ children }) => {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: "flex-end",
  },
});
