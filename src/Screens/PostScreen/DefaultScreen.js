import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

import LogOut from "../../assets/images/svg/log-out.svg";
import UserFoto from "../../assets/images/user-foto/Rectangle22.jpg";
import { Post } from "../../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config";

export const DefaultScreen = ({ route }) => {

  const dispatch = useDispatch();

  const { name, email} = useSelector((state) => state);


  const [posts, setPosts] = useState([]);

  const singOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    async function fetchData() {
      const array = [];
      await onSnapshot(collection(db, "posts"), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push({ ...doc.data(), id: doc.id });
        });
        setPosts(array);
      });
    }
    fetchData();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>

        <TouchableOpacity style={styles.logOutBtn} onPress={singOut}>
          <LogOut />
        </TouchableOpacity>
      </View>

      <View style={styles.mainWrap}>
        <View style={styles.userWrap}>
          <Image style={styles.userFoto} source={UserFoto}></Image>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
        </View>

        {posts.length > 0 && <Post data={posts} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#FFFFFF",
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
  logOutBtn: {
    position: "absolute",
    right: 19,
    bottom: 12,
  },
  mainWrap: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  userWrap: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  userFoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
