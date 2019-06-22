import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import HomeSwiper from './HomeSwiper';
import HomeSearch from './HomeSearch.js';
import HomeTrend from './HomeTrend.js';
import HomeRoom from './HomeRoom.js';
import TitleRoom from './TitleRoom.js'

export default class Home extends Component {
  render() {
    const { container } = styles;
    const TitleHome = {
      trendTitle: "Xu hướng tìm kiếm",
      roomTitle: "Phòng đã xác thực",
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >

          <View style={container}>

            <HomeSwiper />

            <HomeSearch navigation={this.props.navigation} />

            <TitleRoom {...TitleHome} />

            <HomeTrend  navigation={this.props.navigation} />

            <HomeRoom navigation={this.props.navigation} />

          </View>

        </ScrollView>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
