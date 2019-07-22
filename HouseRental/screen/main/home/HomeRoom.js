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
  RefreshControl,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { fetchHouses } from '../../../redux/actionCreator';

const { width, height } = Dimensions.get('window');

class HomeRoom extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.pageSize = 4;
    this.state = {
      isRefreshing: false,
    }
  }
  componentDidMount() {
    this.props.fetchHouses(this.page, this.pageSize);
  }

  handleLoadMore () {
    // console.log(!this.props.loading);
    if (!this.props.loading) {
      this.page = this.page + 1; // increase page by 1
      this.props.fetchHouses(this.page, this.pageSize); // method for API call 
    }
  };
   formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e6).toFixed(1) + " triệu";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " triệu";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " tỷ";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
  render() {
    const {
      container,
      GridViewContainer,
      viewBackgroundImage,
      containerViewBackGround,
      containerTitle,
    } = styles;
    const { houseAPI, navigation, loading } = this.props;
    console.log("so luong", houseAPI.length)
    if (loading) {
      return (
        <ScrollView style={container}>
          <FlatList
            data={houseAPI}
            pagingEnabled
            scrollEnabled
            showsVerticalScrollIndicator={false}
            
            renderItem={({ item }) =>
              <View style={[GridViewContainer]}>
                <ActivityIndicator size="large" color="#089cfb" />
              </View>
            }
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}

          />
        </ScrollView>

      );
    }
    return (
        <FlatList
        style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={true}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={houseAPI}
          renderItem={({ item }) =>

            <View style={GridViewContainer} >

              <View style={containerViewBackGround}>
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
                    {this.formatCash(item.rent_cost)}
                     /phòng
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
          keyExtractor={(item, index) => index.toString()}
          // onEndReachedThreshold={10}
          // onEndReached={
          //   // this.handleLoadMore
          //   // () =>  this.handleLoadMore()
          //   () =>  console.log("load nhieu hon")
          // }
        />
    // </ScrollView>
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
