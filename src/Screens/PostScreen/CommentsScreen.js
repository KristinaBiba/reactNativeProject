import { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import Send from "../../assets/images/svg/send.svg";
import UserFoto from "../../assets/images/user-foto/Rectangle22.jpg";

export const CommentsScreen = ({ route }) => {
  // console.log("route.params.src", route.params.src);

  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const [postFoto, setPostFoto] = useState(null);
  const [newComments, setNewComments] = useState("");
  const [comments, setCommentss] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPostFoto(route.params.src);
      // console.log("postFoto", postFoto);
    }
  }, [route.params]);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const handlePublicComment = () => {
    if (newComments) {
      keyboardHidden();
      console.log(`Comment: ${newComments}`);
      setNewComments("");
    }
    return;
  };
  // const time = new Date();

  const data = [
    {
      comentText: "Lorem* fndlkjvng fgdfgdg drgdrgdrg drhdrhdrh drgdrgrd drgdg",
      comentDay: "02 липня 2021",
      comentTime: "12:44",
      userName: 'Vova',
    },
    {
      comentText: "Lorem* fndlkjvng fgdfgdg drgdrgdrg drhdrhdrh drgdrgrd drgdg",
      comentDay: "02 липня 2021",
      comentTime: "13:44",
      userName: 'Vova',
    },
    {
      comentText: "Lorem* fndlkjvng fgdfgdg drgdrgdrg drhdrhdrh drgdrgrd drgdg",
      comentDay: "02 липня 2021",
      comentTime: "14:44",
      userName: 'Natali Romanova',
    },
    {
      comentText: "Lorem* fndlkjvng fgdfgdg drgdrgdrg drhdrhdrh drgdrgrd drgdg",
      comentDay: "02 липня 2021",
      comentTime: "15:44",
      userName: 'Vova',
    },
  ];

  return (
    <View style={styles.body}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
      <Image source={{ uri: postFoto }} style={styles.image} />

      <View style={styles.wrap}>
        {/* {comments.length > 0 && <FlatList data={comments}/>} */}
        <FlatList
          data={data}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => {
            let owner = false;
            if (item.userName === 'Natali Romanova') {
              owner = true;
            }
            return (<View style={{...styles.comentWrap, flexDirection: owner ? "row-reverse" : 'row'}}>
              <Image style={styles.userFoto} source={UserFoto}></Image>

              <View style={{...styles.textWrap, borderTopRightRadius: owner ? 0 : 6, borderTopLeftRadius: owner ? 6 : 0,}}>
                <Text style={styles.text}>{item.comentText}</Text>
                <Text style={styles.time}>{item.comentDay} | {item.comentTime}</Text>
              </View>
            </View>)
          }}
        />

        <View style={styles.inputWrap}>
          <TextInput
            name="newComments"
            type="text"
            autoComplete="off"
            placeholder="Коментувати..."
            style={styles.input}
            value={newComments}
            multiline
            onFocus={() => {
              setIsKeyboardShow(true);
            }}
            onChangeText={setNewComments}
          ></TextInput>

          <TouchableOpacity
            style={styles.sendBtn}
            onPress={handlePublicComment}
          >
            <Send />
          </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  wrap: {
    flex: 1,
    justifyContent: "space-between",
  },
  comentWrap: {
    marginBottom: 24,
    alignItems: "flex-start",
    justifyContent: "space-between",
    // flexDirection: 'row',    
  },
  userFoto: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  textWrap: {
    width: "85%",
    padding: 16,
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    // borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  time: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
  inputWrap: {
    position: "relative",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  input: {
    padding: 16,
    paddingRight: 50,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  sendBtn: {
    position: "absolute",
    right: 8,
    bottom: 7,
    width: 34,
    height: 34,
  },
});
