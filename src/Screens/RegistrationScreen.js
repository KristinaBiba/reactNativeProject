import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import BgImage from "../assets/images/bg-img/PhotoBG.jpg";
import addSvg from "../assets/images/svg/add.png";

export const RegistrationScreen = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View
          style={{ ...styles.form, marginBottom: isKeyboardShow ? -207 : 0 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.fotoWrap}>
              <Image style={styles.userFoto}></Image>
              <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                <Image
                  source={addSvg}
                  style={{ width: 25, height: 25 }}
                ></Image>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Логін"
              style={styles.input}
              onFocus={() => {
                setIsKeyboardShow(true);
              }}
            ></TextInput>
            <TextInput
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onFocus={() => {
                setIsKeyboardShow(true);
              }}
            ></TextInput>
            <View style={styles.wrap}>
              <TextInput
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
                onFocus={() => {
                  setIsKeyboardShow(true);
                }}
              ></TextInput>
              <TouchableOpacity style={styles.passwordSee}>
                <Text>Показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={keyboardHidden}
          >
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.logIn}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  fotoWrap: {
    position: "relative",
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
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
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    height: 50,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  passwordSee: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  wrap: {
    position: "relative",
    justifyContent: "center",
  },
  button: {
    marginTop: 43,
    marginBottom: 16,
    padding: 16,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  logIn: {
    marginBottom: 78,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
