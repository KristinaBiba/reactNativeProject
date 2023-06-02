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
import * as Location from "expo-location";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {db, storage} from '../../../config';

import ArrowLeft from "../../assets/images/svg/arrow-left.svg";
import CameraBlack from "../../assets/images/svg/camera_alt-black.svg";
import CameraWhite from "../../assets/images/svg/camera_alt-white.svg";
import MapPin from "../../assets/images/svg/map-pin.svg";
import Trash from "../../assets/images/svg/trash.svg";
import { useSelector } from "react-redux";

export const CreatePostsScreen = ({ navigation: { goBack } }) => {

  const user = useSelector((state)=> state);

  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [location, setLocation] = useState(null);

  const [postFoto, setPostFoto] = useState(null);
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");

  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");

      let statusLocation = await Location.requestForegroundPermissionsAsync();
      if (statusLocation.status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const sendPostToDB = async () => {
    const photo = await uploadPhotoToServer();
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          postName,
          postLocation,
          photo,
          location,
          owner: user.userId,
        });
        // console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
          throw e;
      }
};

const uploadPhotoToServer = async () => {

  const response = await fetch(postFoto);

    const file = await response.blob();

    const photoId = Date.now().toString();
    const storageRef = ref(storage, `postImage/${photoId}`);
    await uploadBytes(storageRef, file);

    const photoUrl = await getDownloadURL(ref(storage, `postImage/${photoId}`));
    return photoUrl;

};

  

  const handlePublic = () => {
    if (postFoto && postLocation && postName) {
      keyboardHidden();
      sendPostToDB();
      navigation.navigate("Home", {
        screen: "DefaultPostScreen"});
      handleDel();
    }
    return;
  };

  const takeFoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPostFoto(uri);
      await MediaLibrary.createAssetAsync(uri);
      const locate = await Location.getCurrentPositionAsync();
      const coords = {
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      };
      setLocation(coords);
    }
  };

  const handleDel = () => {
    setPostFoto(null);
    setPostName("");
    setPostLocation("");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={{ ...styles.body, marginTop: isKeyboardShow ? -0 : 0 }}>
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
            <View style={{...styles.cameraWrap, display: isKeyboardShow ? 'none' : 'flex'}}>
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
                  style={{
                    ...styles.cameraBtn,
                    backgroundColor: postFoto
                      ? "rgba(255, 255, 255, 0.3)"
                      : "#FFFFFF",
                  }}
                  onPress={takeFoto}
                >
                  {postFoto ? <CameraWhite /> : <CameraBlack />}
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

            <View style={{...styles.fotoLabel, display: isKeyboardShow ? 'none' : 'flex'}}>
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

        
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.delBtn}
              activeOpacity={0.8}
              onPress={handleDel}
            >
              <Trash />
            </TouchableOpacity>
          </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: 'space-between',
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
    justifyContent: "flex-start",
  },
  cameraWrap: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  fotoWrap: {
    position: "relative",
    height: 240,
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
    justifyContent: "center",
  },
  cameraBtn: {
    position: "absolute",
    width: 60,
    height: 60,
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
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    marginTop: 9,
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
