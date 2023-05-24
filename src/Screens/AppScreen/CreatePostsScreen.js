import { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "../../assets/images/svg/arrow-left.svg";
import CameraBlack from "../../assets/images/svg/camera_alt-black.svg";
import MapPin from "../../assets/images/svg/map-pin.svg";
import Trash from "../../assets/images/svg/trash.svg";

export const CreatePostsScreen = ({ navigation: { goBack } }) => {
  const navigation = useNavigation();

  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const [postFoto, setPostFoto] = useState("");
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");

  const handlePublic = () => {
    if (postFoto && postLocation && postName) {
      keyboardHidden();
      navigation.navigate("Posts", { postFoto, postName, postLocation });
    }
    return;
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleDel = () => {
    setPostFoto("");
    setPostName("");
    setPostLocation("");
    console.log("cameraRef", cameraRef);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={{ ...styles.body, marginTop: isKeyboardShow ? -180 : 0 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Створити публікацію</Text>

            <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          </View>

          <View style={styles.mainWrap}>
            <View style={styles.cameraWrap}>
              <Camera style={styles.fotoWrap} type={type} ref={setCameraRef}>
                {postFoto && (
                  <View style={styles.foto}>
                    <Image
                      source={{ uri: postFoto }}
                      style={{ height: 240, width: "100%" }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.cameraBtn}
                  onPress={async () => {
                    if (postFoto) {
                      setPostFoto("");
                      return;
                    }
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      setPostFoto(uri);
                      await MediaLibrary.createAssetAsync(uri);
                    }
                  }}
                >
                  <CameraBlack />
                </TouchableOpacity>
              </Camera>

              {/* <View > */}
              {/* <TouchableOpacity
                  style={styles.cameraBtn}
                    
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    
                  </TouchableOpacity> */}
            </View>

            <View style={styles.fotoLabel}>
              {postFoto !== "" ? (
                <Text style={styles.fotoLabelText}>Редагувати фото</Text>
              ) : (
                <Text style={styles.fotoLabelText}>Завантажте фото</Text>
              )}
            </View>

            <TextInput
              name="postName"
              type="text"
              autoComplete="off"
              placeholder="Назва..."
              style={styles.input}
              value={postName}
              onFocus={() => {
                setIsKeyboardShow(true);
              }}
              onChangeText={setPostName}
            ></TextInput>

            <View style={styles.inputWrap}>
              <TextInput
                name="postLocation"
                type="text"
                autoComplete="off"
                placeholder="Місцевість..."
                style={{ ...styles.input, paddingLeft: 28 }}
                value={postLocation}
                onFocus={() => {
                  setIsKeyboardShow(true);
                }}
                onChangeText={setPostLocation}
              ></TextInput>
              <MapPin style={styles.svgLocation} />
            </View>

            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor:
                  postFoto && postLocation && postName ? "#FF6C00" : "#F6F6F6",
              }}
              activeOpacity={0.8}
              onPress={handlePublic}
            >
              <Text
                style={{
                  ...styles.buttonText,
                  color:
                    postFoto && postLocation && postName
                      ? "#FFFFFF"
                      : "#BDBDBD",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {!isKeyboardShow && (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.delBtn}
              activeOpacity={0.8}
              onPress={handleDel}
            >
              <Trash />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
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
  backBtn: {
    position: "absolute",
    left: 16,
    bottom: 9,
  },
  mainWrap: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingBottom: 80,
    justifyContent: "flex-start",
  },
  cameraWrap: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    // borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  fotoWrap: {
    position: "relative",
    height: 240,
    // backgroundColor: "#F6F6F6",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  foto: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: "100%",
    // height: 240,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "#E8E8E8",
    // borderRadius: 8,
    justifyContent: "center",
    // alignItems: "center",
  },
  cameraBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  fotoLabel: {
    height: 19,
    marginBottom: 48,
  },
  fotoLabelText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    marginBottom: 32,
    height: 35,
    paddingBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  inputWrap: {
    position: "relative",
    marginBottom: 32,
    height: 35,
  },
  svgLocation: {
    position: "absolute",
    left: 0,
    bottom: 12,
  },
  button: {
    padding: 16,
    height: 50,
    // backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    // color: "#BDBDBD",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 80,
    paddingTop: 9,
    paddingBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  delBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
