import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Background } from "../components/Background";
import { UserFoto } from "../components/UserFoto";

export const RegistrationScreen = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    navigation.navigate("Home");
  }
  
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <Background>
        <View
          style={{ ...styles.form, marginBottom: isKeyboardShow ? -207 : 0 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <UserFoto/>

            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Логін"
              style={styles.input}
              value={name}
              onFocus={() => {
                setIsKeyboardShow(true);
              }}
              onChangeText={setName}
            ></TextInput>
            <TextInput
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Адреса електронної пошти"
              style={styles.input}
              value={email}
              onFocus={() => {
                setIsKeyboardShow(true);
              }}
              onChangeText={setEmail}
            ></TextInput>
            <View style={styles.wrap}>
              <TextInput
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
                value={password}  
                onFocus={() => {
                  setIsKeyboardShow(true);
                }}
                onChangeText={setPassword}
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
            <Text style={styles.buttonText} onPress={handleButtonClick}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.logIn}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
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
