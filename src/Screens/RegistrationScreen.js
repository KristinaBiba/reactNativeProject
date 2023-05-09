import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";
import BgImage from "../assets/images/bg-img/PhotoBG.jpg";

export const RegistrationScreen = () => {
  return (
    <>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View>
            <Image style={styles.userFoto}></Image>
            <Image></Image>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Логін"
            style={styles.input}
          ></TextInput>
          <TextInput
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Адреса електронної пошти"
            style={styles.input}
          ></TextInput>
          <View>
            <TextInput
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Пароль"
              style={styles.input}
            ></TextInput>
            <Text>Показати</Text>
          </View>

          <Button
            style={styles.button}
            type="button"
            title="Зареєструватися"
          ></Button>

          <Text style={styles.logIn}>Вже є аккаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </>
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
  image: {
    flex: 1,
  },
  userFoto: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
    marginBottom: 32,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
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
  },
  button: {
    marginTop: 43,
    marginBottom: 16,
    padding: 16,
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: '#FFFFFF',
  },
  logIn: {
    marginBottom: 78,   
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});
