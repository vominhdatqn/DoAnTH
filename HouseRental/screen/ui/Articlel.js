import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Alert, Dimensions, TouchableOpacity, Image } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Moment from 'moment';
import { getListPost, removeListPost } from '../../redux/actionCreator';
import { connect } from 'react-redux';
const screen = Dimensions.get('window');
 class Articlel extends Component {

async delete(house_id, houseName) {

    Alert.alert(
      'Message',
      `Are you sure you want to delete "${houseName}"`,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.removeListPost(house_id)},
      ],
      {cancelable: false},
    );
}
formatCash = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e6).toFixed(1) + " triệu";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " triệu";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " tỷ";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'#f8f8f8' }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: this.startHeaderHeight,
                        backgroundColor: '#004c7e',
                    }}>
                        <View style={styles.header}>
                            
                            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                                <Icons name="arrow-left" size={20} color={"white"} />
                            </TouchableOpacity>


                            <Text style={[styles.textTitle,{fontSize:20,color:'#ffffff'}]}>Danh Sách Phòng Cho Thuê</Text>

 
                            <View />

                        </View>
                    </View>
        <SwipeListView 
          useFlatList
          data={this.props.listPost}
          renderItem={ (data, rowMap) => (
          <View style={styles.rowFront}>
            {/* <Image style={{ height: 40, width: 40 }} source={{uri: `${data.item.images}`}} />
            <View >
              <Text>{data.item.houseName}</Text>
              <Text>{Moment(`${data.item.date_post}`).format('Do MM YYYY, h:mm:ss a')}</Text>
              <Text>{data.item.rent_cost}triệu</Text>
            </View> */}
             <View style={{ height: 110, marginHorizontal: 20, flexDirection: 'row',marginBottom: 10  }}>
                
                <View style={{
                  flex: 1, borderRadius: 5,
                  shadowColor: '#ece6e6',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 6,
                  borderWidth: 1,
                  borderColor: '#FEFFFE',
                }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailHouse",{...data.item})}>
                  <Image
                    style={{
                      height: '100%', width: '100%', borderWidth: 1,
                      borderColor: '#FEFFFE',
                      borderRadius: 5
                    }}
                    source={{ uri: `${data.item.images}` }}
                    
                  />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 2,borderBottomWidth:1,borderBottomColor:'#d9d9d9',marginLeft:10 }}>
                  <View style={{ flex: 0.5, flexDirection: 'row' }}>
                    <View style={{alignItems:'flex-start',flex:1}}>
                      <Text style={{fontSize:10,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{Moment(`${data.item.date_post}`).format('Do MM YYYY, h:mm a')}</Text>
                    </View>
                    <View style={{alignItems:'flex-end',flex:1}}>
                      <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"#e91e63"}}>{this.formatCash(data.item.rent_cost)}/phòng</Text>
                    </View>
                  </View>
                  <View style={{ flex: 2,justifyContent:'center' }}>
                  <Text style={{fontSize:13,fontWeight:'bold',color:'black'}}>{data.item.houseName}</Text>
                  </View>
                  <View style={{ flex: 1.5 }}>
                  <Text numberOfLines={1} style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{data.item.Street}, Phường {data.item.guild}</Text>
                  <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{data.item.township}</Text>
                  </View>
                </View>
              </View>
           </View>
      )}
        renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={() => this.delete(data.item.house_id, data.item.houseName)}
            >
            <Text style={styles.backTextWhite}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      keyExtractor={(item,index) => `${item.house_id}`}
        />
      </View>
    </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    // alignItems: 'center',
    backgroundColor: 'white',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    // justifyContent: 'center',
    // height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: 100,
  },
  header:{
    flexDirection: 'row', 
    marginVertical: 16, 
    marginHorizontal: 5,
     justifyContent: 'space-between',
      alignItems: 'center' 
},
rowTitle:{
    flex: 1, 
    height: screen.height * 0.15,
    borderBottomColor:'#ece6e6',
    borderBottomWidth:1,
    backgroundColor:'#f8f8f8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,    
},
rowAddress:{
    flex: 1,
    height: screen.height * 0.15,
    borderRadius: 4,
    backgroundColor: '#f8f8f8',
    marginVertical: 10, shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: '#ece6e6',
},
rowNote:{
    flex: 1,
    height: screen.height * 0.4,
    borderRadius: 4,
    backgroundColor: '#f8f8f8',
    marginVertical: 10, shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: '#ece6e6',
}
});


const mapStateToProps = (state) => ({
  listPost: state.listPostReducer.listPost,
});
export default connect(mapStateToProps, { getListPost, removeListPost })(Articlel);

