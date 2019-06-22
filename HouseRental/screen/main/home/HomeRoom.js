import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchHouses } from '../../../redux/actionCreator';
const { width, height } = Dimensions.get('window');

class HomeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 4,
    }
  }
  componentDidMount() {
    const { page, pageSize } = this.state;
    this.props.fetchHouses(page, pageSize);
  }

 
  render() {
    const {
      container,
      GridViewContainer,
      viewBackgroundImage,
      containerViewBackGround,
      containerTitle,
    } = styles;
    const { houseAPI, navigation, loading } = this.props;
    if (loading) {
      return (
        <View style={container}>
          <FlatList
            data={houseAPI}
            renderItem={({ item }) =>
              <View style={[GridViewContainer]} key={item.house_id}>
                <ActivityIndicator size="large" color="#089cfb" />
              </View>
            }
            numColumns={2}
            keyExtractor={(item, index) => item.house_id}
          />
        </View>

      );
    }
    return (
      <View style={container}>
        <FlatList
          data={houseAPI}
          renderItem={({ item }) =>
          <View style={GridViewContainer} key={item.house_id}>

        <View style={containerViewBackGround}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("DetailHouse", { ...item })}> */}
          <TouchableOpacity onPress={() => navigation.navigate("DetailHouse", { ...item })}>
            <ImageBackground source={{ uri: item.images }}
              style={viewBackgroundImage} resizeMode='cover'
              borderRadius={6}>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={containerTitle}>
          <View style={{ flex: 2, justifyContent: 'flex-end' }}>
            <Text numberOfLines={2} style={{
              fontSize: 13, 
              fontWeight: 'bold', 
              color: 'black' 
              }}
            >
            {item.houseName}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ 
              fontSize: 12, 
              fontWeight: '700', 
              fontFamily: 'Cochin', 
              color: "#e91e63" 
              }}
            >
            {item.rent_cost}
             triệu/phòng
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text numberOfLines={1} style={{ 
              fontSize: 12, 
              fontWeight: '700', 
              fontFamily: 'Cochin', 
              color: "gray" 
              }}
            >
            {`${item.Street},Phường ${item.guild},Quận ${item.township},TP.${item.city}`}
            </Text>
          </View>

        </View>
      </View>
        }
          numColumns={2}
          keyExtractor={(item, index) => item.house_id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.94,
    height: height * 1.1,
    marginLeft: 12,
    backgroundColor: 'white',
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
    margin: 5,
    backgroundColor: 'white',

  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,

  },
  viewBackgroundImage: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: '#FEFFFE',
    borderRadius: 12,
  },
  containerViewBackGround: {
    height: 120,
    width: "100%",
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#ece6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FEFFFE',
  },
  containerTitle: {
    height: 100,
    width: "100%",
    backgroundColor: 'white',
  }
})
function mapStateToProps(state) {
  return {
    houseAPI: state.houseReducer.house,
    loading: state.houseReducer.loading,
  };
}
export default connect(mapStateToProps, { fetchHouses })(HomeRoom);
