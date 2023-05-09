import { useFonts } from 'expo-font';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';

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
      <RegistrationScreen></RegistrationScreen>
      {/* <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 36 }}>Open up App.js to start working on your app!</Text> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
