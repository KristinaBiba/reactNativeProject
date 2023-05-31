
import { useNavigation } from '@react-navigation/native';

import { FlatList, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Shape from "../assets/images/svg/shape.svg";
import MapPin from "../assets/images/svg/map-pin.svg";

export const Post = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => {
          let counter = 0;
          if (item.comments){
            counter = item.comments.length;
          }
          

         return ( <View style={styles.imgWrap}>
            <Image
              source={{ uri: item.postFoto }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.postName}</Text>

            <View style={styles.descriptionWrap}>
              <TouchableOpacity style={styles.wrap} onPress={() => navigation.navigate("CommentsScreen", {src: item.postFoto, id: item.id})}> 
                <Shape />
                <Text style={styles.count}>{counter}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrap} onPress={() => navigation.navigate("MapScreen", {location: item.location, title: item.postName})}>
                <MapPin />
                <Text style={styles.location}>{item.postLocation}</Text>
              </TouchableOpacity>
            </View>
          </View>)
  }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 80,

  },
  imgWrap: {
    marginBottom: 34,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 12,
  },
  descriptionWrap: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  count: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  location: {
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
