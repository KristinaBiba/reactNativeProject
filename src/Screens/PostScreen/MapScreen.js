import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import MapView, { Marker } from "react-native-maps";


export const MapScreen = ({route}) => {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const coordsLocation = {
      latitude: route.params.location.latitude,
      longitude: route.params.location.longitude,
    };
    setLocation(coordsLocation);
  }, [route.params]);

  return (
    <View style={styles.form}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title={route.params.title} coordinate={location}/>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

