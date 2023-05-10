import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const  PostScreen = () => {

  return (
    <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        </KeyboardAvoidingView>

    </>
  );
};

const styles = StyleSheet.create({
  logIn: {
    
  },
});
