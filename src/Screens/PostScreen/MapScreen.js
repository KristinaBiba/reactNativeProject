import { useState } from "react";
import { View, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";


export const MapScreen = ({route}) => {

  const [location, setLocation] = useState(null);

  console.log(route);
  // const coordsLocation = {
  //   latitude: route.params.location.latitude,
  //   longitude: route.params.location.longitude,
  // };
  // setLocation(coordsLocation);

  return (
    <View style={styles.form}>
      {/* <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      > */}
        {/* {location && (
          <Marker title="I was here" coordinate={location} description="Hello" />
        )} */}
      {/* </MapView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  mapStyle: {
    // fontFamily: "Roboto-Medium",
    // color: "#212121",
    // fontSize: 30,
    // lineHeight: 35.16,
    // textAlign: "center",
    // marginBottom: 33,
    // marginTop: 32,
  },
});

