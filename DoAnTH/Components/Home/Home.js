import React, { Component } from 'react';
import {StyleSheet, View,ScrollView,SafeAreaView } from 'react-native';
import HomeSwiper from './HomeSwiper';
import HomeSearch from './HomeSearch.js';
import HomeTrend from './HomeTrend.js';
import HomeRoom from './HomeRoom.js';
import TitleRoom from './TitleRoom.js'
// import AddModal from '../AddModal';
import AddModal from '../AddModal';
export default class Home extends Component {
  render() {
    const {container} = styles;
    const TitleHome = {
      trendTitle:"Xu hướng tìm kiếm",
      roomTitle:"Phòng đã xác thực",
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView  
            style={styles.container}
            showsVerticalScrollIndicator={false}
            >
                <View style={container}>
                    <AddModal />
                    <HomeSwiper />
                    <HomeSearch />
                    <TitleRoom {...TitleHome}/>
                    <HomeTrend />
                    <HomeRoom navigation={this.props.navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
       
     
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'

    } ,slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BB',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      }
})
