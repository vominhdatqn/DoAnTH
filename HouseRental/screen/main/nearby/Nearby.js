import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform,
  PermissionsAndroid,
  TouchableOpacity
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
const locations = require('../../../Location.json');
import polyline from '@mapbox/polyline';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
const options = {
  enableHighAccuracy: true,
  maximumAge : 60000,
  timeout : 45000
};
export default class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 10.802033,
      longitude: 106.714659,
      locations: locations,
    };

  }

  async  componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'Cool Location App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
          (error) => console.log('Error:', error),
          options
        )
    
        const { locations: [sampleLocation] } = this.state
    
        this.setState({
          desLatitude: sampleLocation.coords.latitude,
          desLongitude: sampleLocation.coords.longitude
        }, this.mergeCoords)
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  
  }

  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM`)
      const respJson = await resp.json();
      const response = respJson.routes[0]
      const distanceTime = response.legs[0]
      const distance = distanceTime.distance.text
      const time = distanceTime.duration.text
      const points = polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords, distance, time });
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  mergeCoords = () => {
    const {
      latitude,
      longitude,
      desLatitude,
      desLongitude
    } = this.state

    const hasStartAndEnd = latitude !== null && desLatitude !== null

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`
      const concatEnd = `${desLatitude},${desLongitude}`
      this.getDirections(concatStart, concatEnd)
    }
  }

  onMarkerPress = location => () => {
    const { coords: { latitude, longitude } } = location;
    this.setState({
      destination: location,
      desLatitude: latitude,
      desLongitude: longitude
    }, this.mergeCoords)
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: { latitude, longitude }
            } = location
            return (
              <Marker
                key={idx}
                coordinate={{ latitude, longitude }}
                onPress={this.onMarkerPress(location)}
              />
            )
          })
        }
      </View>
    )
  }
  render() {
    const {
      time,
      coords,
      distance,
      latitude,
      longitude,
      destination,
    } = this.state
    const des = typeof destination === 'undefined' ? locations[0] : destination;
 const loc = typeof coords === 'undefined' ? console.log("Undefined") : (<Polyline
  strokeColor="red"
  strokeWidth={2}
  coordinates={coords}
  fillColor="rgba(255,0,0,0.5)"/>);
// console.log("loc", loc)
    if (latitude) {
      
      return (
        <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>

          <View style={{ flex: 1 }} >
            
            <Image
              source={{ uri: des && des.image_url }}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
              }}
              
            />
           
            <View style={styles.header} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailHouse",{
               cate_id: des.cate_id,
               userID: des.userID,
               houseName: des.name,
               images: des.image_url,
               rent_cost: des.rent_cost,
               Deposit: des.Deposit,
               Street: des.Street,
               guild: des.guild,
               township: des.township,
               city: des.city,
               note: des.note,
               phone: des.phone
            })}>
              {/* <View style={{ position: 'absolute', right: -2, top: -10, zIndex: 2 }}>
                {/* <Icon name="airplay" size={30} color="#089cfb" onPress={() => this.props.navigation.navigate("DetailHouse",{ cate_id: destination.cate_id, userID: destination.userID  })} /> */}
              
              <Text style={styles.text}>Estimated Time: {time}</Text>
              <Text style={styles.text}>Estimated Distance: {distance}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 3, marginTop: 30 }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              style={{ flex: 1 }}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}>

              {this.renderMarkers()}
              {loc}
            </MapView>
          </View>
        </View>

      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>We need your permission!</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  map: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: "#4a4a4a",
    fontFamily: 'System'
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 6,
    bottom: -10,
    left: 36,
    right: 36,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: (Platform.OS === 'android') ? 7 : 0
  }
});




// // // // https://maps.googleapis.com/maps/api/geocode/json?address=346%20+%20Phan%20V%C4%83n%20Tr%E1%BB%8B+B%C3%ACnh%20Th%E1%BA%A1nh+H%E1%BB%93%20Ch%C3%AD%20Minh&key=AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM

// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class Nearby extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})
