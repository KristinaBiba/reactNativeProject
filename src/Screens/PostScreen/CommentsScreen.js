import { Text, View,StyleSheet } from "react-native";

export const CommentsScreen = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>CommentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    
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
});

