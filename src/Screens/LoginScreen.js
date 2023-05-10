import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BgImage from "../assets/images/bg-img/PhotoBG.jpg";

export const LoginScreen = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  return (
    <>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isKeyboardShow ? -190 : 0 }}
          >
            
            <Text style={styles.title}>Увійти</Text>
            
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
            <View style={styles.fotoWrap}>
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

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.logIn}>Немає аккаунта? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    // flex: 0.5,
    marginTop: "auto",
    // justifyContent: 'flex-start',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
    marginTop: 32,
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
  },
  passwordSee: {
    position: "absolute",
    right: 16,
    top: 16,
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
