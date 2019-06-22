import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
// import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

export default class HomeSwiper extends Component {
  render() {
    const { container, img } = styles;
    return (
      <View style={container}>

        {/* <Swiper autoplay={true}> */}

          <View style={styles.slide1}>

            <ImageBackground source={require('../../../assets/img/img1.jpg')} style={img}>

              <Text style={styles.text}>“Trao trọng trách, trọn niềm tin”</Text>

            </ImageBackground>

          </View>

          {/* <View style={styles.slide2}>

            <ImageBackground source={require('../../../assets/img/img1.jpg')} style={img}>

              <Text style={styles.text}>“Không thu phí người đi thuê”</Text>

            </ImageBackground>

          </View>

          <View style={styles.slide3}>

            <ImageBackground source={require('../../../assets/img/img1.jpg')} style={img}>

              <Text style={styles.text}>“Tìm bạn ở ghép phù hợp”</Text>

            </ImageBackground>

          </View> */}

        {/* </Swiper> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.3,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BB',
  },
  text: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
  },
})
