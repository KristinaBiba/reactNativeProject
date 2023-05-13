import { useFonts } from 'expo-font';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen';
import { PostScreen } from './src/Screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
      {/* <PostScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
