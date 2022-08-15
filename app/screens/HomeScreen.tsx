import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import React from 'react';
import BottomSheetApp from '../components/BottomSheet';
// import CircleButton from 'react-native-circle-button';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const HomeScreen = () => {

  const [ region, setRegion ] = React.useState({
    latitude: 42.3868,
    longitude: -72.5301,
    latitudeDelta: 0.010,
    longitudeDelta: 0.020
  })

  return (
    
    <View style= {styles.container}>
      <Button title="Create event" onPress = { () => console.log("awesome")} />
      <MapView style={styles.map} 
      
        initialRegion={{
          latitude: 42.3899,
          longitude: -72.5281,
          latitudeDelta: 0.010,
          longitudeDelta: 0.020
        }}

        region = {{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.010,
          longitudeDelta: 0.020
        }}
        provider = "google">
        
        {/* <Marker coordinate={{
          latitude: region.latitude,
          longitude: region.longitude
        }}/> */}
      </MapView> 

            {/* <View style={{ flex: 1 }}>
                  <CircleButton size={45} />
       </View> */}

      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails= {true}
        GooglePlacesSearchQuery= {{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.010,
            longitudeDelta: 0.020
          })
        }}
        query={{
          key: "AIzaSyCWonk3s7DIuS20bICmmitwYlNr43xREOs",
          language: 'en',
          components: "country:us",
          //types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`
        }}

        styles = {{
          container: {flex: 0, position: "absolute", width: "92%", top: "5%", zIndex: 1},
          listView: { backgroundColor: "white" },
        }}
      />

    <BottomSheetApp></BottomSheetApp>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  eventCard: {
     margin: 20
  }
});