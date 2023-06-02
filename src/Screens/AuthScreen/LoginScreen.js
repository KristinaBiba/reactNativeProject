import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Background } from "../../components/Background";
import { logIn } from "../../../redux/auth/authOperations";

export const LoginScreen = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const [passwordInputSecure, setPasswordInputSecure] = useState(true);
  const togglePasswordSee = () => {
      setPasswordInputSecure(!passwordInputSecure);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    // console.log(`Email: ${email}, Password: ${password}`);
    dispatch(logIn({email, password}));
  };


  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
       
      <Background>
        <View
          style={{ ...styles.form, marginBottom: isKeyboardShow ? -0 : 0 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Увійти</Text>

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
            <View style={styles.fotoWrap}>
              <TextInput
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Пароль"
                secureTextEntry={passwordInputSecure}
                style={styles.input}
                value={password}
                onFocus={() => {
                  setIsKeyboardShow(true);
                }}
                onChangeText={setPassword}
              ></TextInput>
              <TouchableOpacity style={styles.passwordSee} onPress={togglePasswordSee}>
                <Text>Показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleButtonClick}
          >
            <Text style={styles.buttonText} >
              Увійти
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.logIn}>Немає аккаунта? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </Background>
    
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: "auto",
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
