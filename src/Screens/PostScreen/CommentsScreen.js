import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
  Platform,
} from "react-native";
import {
  doc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import Send from "../../assets/images/svg/send.svg";
import UserFoto from "../../assets/images/user-foto/Rectangle22.jpg";
import { db } from "../../../config";

export const CommentsScreen = ({ route }) => {
  const user = useSelector((state) => state);
  const { src, id } = route.params;

  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const [postFoto, setPostFoto] = useState(null);
  const [newComments, setNewComments] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let currentPost = {};
        await onSnapshot(doc(db, "posts", id), (doc) => {
          currentPost = doc.data();
          currentPost.comments && setComments(currentPost.comments)
        });
      } catch (error) {
        console.log("error in getDataFromFirestore", error);
        throw error;
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (route.params) {
      setPostFoto(src);
    }
  }, [route.params]);

  const keyboardHidden = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const addComment = async () => {
    try {
      const ref = doc(db, "posts", id);

      const postTime = new Date(Date.now());

      const day = [
        postTime.getDate(),
        [
          "січня",
          "лютого",
          "березня",
          "квітня",
          "травня",
          "червня",
          "липня",
          "серпня",
          "вересня",
          "жовтня",
          "листопада",
          "грудня",
        ][postTime.getMonth()],
        postTime.getFullYear(),
      ].join(" ");

      const time = [postTime.getHours(), postTime.getMinutes()].join(":");

      await updateDoc(ref, {
        comments: arrayUnion({
          commentOwner: user.userId,
          commentText: newComments,
          day,
          time,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublicComment = async () => {
    if (newComments) {
      keyboardHidden();
      addComment();
      setNewComments("");
    }
    return;
  };

  return (
    <View style={styles.body}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
      <Image source={{ uri: postFoto }} style={styles.image} />

      <View style={styles.wrap}>
        {comments.length > 0 && (
          <FlatList
            data={comments}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => {
              let owner = false;
              if (item.commentOwner === user.userId) {
                owner = true;
              }
              return (
                <View
                  style={{
                    ...styles.comentWrap,
                    flexDirection: owner ? "row-reverse" : "row",
                  }}
                >
                  <Image style={styles.userFoto} source={UserFoto}></Image>

                  <View
                    style={{
                      ...styles.textWrap,
                      borderTopRightRadius: owner ? 0 : 6,
                      borderTopLeftRadius: owner ? 6 : 0,
                    }}
                  >
                    <Text style={styles.text}>{item.commentText}</Text>
                    <Text style={styles.time}>
                      {item.day} | {item.time}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        )}

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
