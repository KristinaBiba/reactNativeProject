import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Background } from "../../components/Background";
import { UserFoto } from "../../components/UserFoto";

import LogOut from "../../assets/images/svg/log-out.svg";
import { Post } from "../../components/Post";
import { logOut } from "../../../redux/auth/authOperations";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config";

export const ProfileScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state);

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
    <Background>
      <View style={styles.form}>
        <UserFoto />
        <TouchableOpacity style={styles.logOutBtn} onPress={singOut}>
          <LogOut />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>

        {posts.length > 0 && <Post data={posts} />}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  form: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 60,
    flex: 0.9,
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
  },
  logOutBtn: {
    position: "absolute",
    right: 19,
    top: 21,
    width: 24,
  },
});
