import React, { Component } from 'react';
import {
Text, 
StyleSheet, 
View,
Dimensions,
TouchableOpacity,
ScrollView,
SafeAreaView,
Platform,
StatusBar,
Image,
FlatList
} from 'react-native';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import getTrend from '../../../api/getTrend';
const screen = Dimensions.get('window');


export default class Trend extends Component {
constructor(props){
    super(props);
    this.state = {
      data: []
    }
}
componentWillMount(){
    this.startHeaderHeight = screen.width*0.15
    if(Platform.OS =='ios'){
        this.startHeaderHeight = screen.width*0.15 + StatusBar.currentHeight
    }
}
componentDidMount(){
  this.fetchTrend();
}
fetchTrend = async () => {
 
  const { township } = this.props.navigation.state.params;
  console.log(township);
    try {
        const response = await getTrend(township);
        const responseJSON = await response.json();
        console.log(responseJSON.data);
        this.setState({
          data:responseJSON.data
          })
    } catch (error) {
        console.log(error)
    }

}
formatCash = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e6).toFixed(1) + " triệu";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " triệu";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " tỷ";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

    render() {
        const {textTitle,header } = styles;
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#f8f8f8' }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: this.startHeaderHeight,
                        backgroundColor: '#004c7e',
                    }}>
                        <View style={header}>
                            
                            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                                <Icons name="arrow-left" size={20} color={"white"} />
                            </TouchableOpacity>


                            <Text style={[textTitle,{fontSize:20,color:'#ffffff'}]}>Xu hướng tìm kiếm</Text>
                            <Text> </Text>
                        </View>
                    </View>
                    <FlatList
                data={this.state.data}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailHouse",{...item})}>
                  <Image
                    style={{
                      height: '100%', width: '100%', borderWidth: 1,
                      borderColor: '#FEFFFE',
                      borderRadius: 5
                    }}
                    source={{ uri: `${item.images}` }}
                    
                  />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 2,borderBottomWidth:1,borderBottomColor:'#d9d9d9',marginLeft:10 }}>
                  <View style={{ flex: 0.5, flexDirection: 'row' }}>
                    <View style={{alignItems:'flex-start',flex:1}}>
                      <Text style={{fontSize:10,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>TÌM NGƯỜI THUÊ</Text>
                    </View>
                    <View style={{alignItems:'flex-end',flex:1}}>
                      <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"#e91e63"}}>{this.formatCash(item.rent_cost)}/phòng</Text>
                    </View>
                  </View>
                  <View style={{ flex: 2,justifyContent:'center' }}>
                  <Text style={{fontSize:13,fontWeight:'bold',color:'black'}}>{item.houseName} tại {item.township}</Text>
                  </View>
                  <View style={{ flex: 1.5 }}>
                  <Text numberOfLines={1} style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{item.Street}, Phường {item.guild}</Text>
                  <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{item.township}</Text>
                  </View>
                </View>
              </View>
                )}
                
                />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textTitle:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:"500",
        fontStyle:'normal',
        color:"#4a4a4a"
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
})
