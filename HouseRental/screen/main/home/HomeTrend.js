import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class HomeTrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: "Bình Thạnh", township: "Bình Thạnh", hinh: "https://image.tienphong.vn/w665/Uploaded/2018/uqvpbciv/2018_08_29/toan_canh_vgdf.jpg" },
        { key: "Quận     7", township: "7", hinh: "http://angialand.com.vn/wp-content/uploads/2016/08/duanquan7.jpg" },
        { key: "Quận     3", township: "3", hinh: "https://mytourcdn.com/upload_images/Image/Location/24_10_2016/11/du-lich-quan-3-da-nang-mytour-1.jpg" },
        { key: "Quận     10", township: "10", hinh: "https://khl.vn/wp-content/uploads/2017/05/can-ho-riverapark-2.jpg" },
        { key: "Quận  Thủ Đức", township: "Thủ Đức", hinh: "https://blog.rever.vn/hubfs/gigamall_4-min.jpg" },
        { key: "Quận      1", township: "1", hinh: "https://vietnambiz.mediacdn.vn/stores/news_dataimages/linhlt/112018/14/17/4107_shutterstock_Trung_tam_Q.1.jpg" },
      ]
    }
  }

  render() {
    const {
      container,
      GridViewContainer,
      GridViewTextLayout,
      viewBackgroundImage,
    } = styles;
    const { data } = this.state;
    return (
      <View style={container}>

        <FlatList
          data={data}
          renderItem={({ item }) =>
         
            <View style={GridViewContainer}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("Trend",{...item})}>
              <ImageBackground source={{ uri: item.hinh }}
                style={viewBackgroundImage} resizeMode='cover'
                borderRadius={6}>
                <Text style={GridViewTextLayout}>{item.key}</Text>
              </ImageBackground>
              </TouchableOpacity>
            </View>
           
          }
          numColumns={3}
          keyExtractor={(item, index) => `steps-${item.key}`}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.94,
    height: height * 0.35,
    marginLeft: 12,
    backgroundColor: 'white',
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#ece6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FEFFFE',
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },

  viewBackgroundImage: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: '#FEFFFE',
  }
})
