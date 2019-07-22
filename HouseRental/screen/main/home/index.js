import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, RefreshControl  } from 'react-native';
import HomeSwiper from './HomeSwiper';
import HomeSearch from './HomeSearch.js';
import HomeTrend from './HomeTrend.js';
import HomeRoom from './HomeRoom.js';
import TitleRoom from './TitleRoom.js'
import { connect } from 'react-redux';
import { fetchHouses } from '../../../redux/actionCreator';


 class Home extends Component {
 constructor(props){
   super(props);
   this.page = 1;
    this.pageSize = 4;
   this.state = {
    refreshing: false,
  };
 
 }
_onRefresh = () => {

  if (!this.props.loading) {
    this.page = this.page + 1; // increase page by 1
    this.props.fetchHouses(this.page, this.pageSize); // method for API call 
  }
};
  render() {
    const { container } = styles;
    const TitleHome = {
      trendTitle: "Xu hướng tìm kiếm",
      roomTitle: "Phòng đã xác thực",
    }
    const { loading } = this.props;
    return (

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          // onMomentumScrollEnd={this._onRefresh}
          refreshControl={
            <RefreshControl
            progressBackgroundColor={"white"}
            colors={["#089cfb","#004C7E"]}
              refreshing={loading}
              onRefresh={this._onRefresh}
            />
          }
        >
            <HomeSwiper />

            <HomeSearch navigation={this.props.navigation} />

            <TitleRoom {...TitleHome} />

            <HomeTrend  navigation={this.props.navigation} />
         
            <HomeRoom navigation={this.props.navigation} />
           
          </ScrollView>
        
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
function mapStateToProps(state) {
  return {
    loading: state.houseReducer.loading,
  };
}
export default connect(mapStateToProps, { fetchHouses })(Home);