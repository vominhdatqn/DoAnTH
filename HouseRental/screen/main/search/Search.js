import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList, Image, KeyboardAvoidingView, SafeAreaView, Platform, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import RangeSlider from 'rn-range-slider'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import searchStreet from '../../../api/searchStreet';
const { width, height } = Dimensions.get('window');
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSearch: '',
      borderColor: '#d9d9d9',
      data: [],
    };
  }
  formatRangeHigh(currentRangeHigh) {
    const RangeHigh = (currentRangeHigh).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.setState({ RangeHigh });
  }
  formatRangeLow(currentRangeLow) {
    const RangeLow = (currentRangeLow).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.setState({ RangeLow });
  }
  onFocus() {
    this.setState({ borderColor: '#0693e3' })
  }
  onBlur() {
    this.setState({ borderColor: '#d9d9d9' })
  }
  _onProcessSearch(currentSearch) {
    if (currentSearch === '') {
      this.setState({ showClose: false });
    } else {
      this.setState({ showClose: true });
    }
  }
 async handlerSearch(nameSearch) {
    try {
      const response = await searchStreet(nameSearch);
      const responeJSON = await response.json();
        this.setState({data: responeJSON.data});
  } catch (error) {
    console.log(error);
    }
  };
  render() {
    const { container, header, body, borderSearch } = styles;
    const { nameSearch, RangeHigh, borderColor, showClose, RangeLow, data } = this.state;
    const iconClone = showClose ? <Ionicons name="close" size={20} color="#0693e3" /> : null;
    return (
      <SafeAreaView style={container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}
          style={{ flex: 1 }}>
          <View style={header}>
            <View style={[borderSearch, { borderColor }]}>
              <TouchableOpacity >
                <View style={{ flex: 1, flexDirection: 'row', borderRadius: 12, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                  <Ionicons name="source-commit-start-next-local" size={23} color="#0693e3" />
                  <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Cochin', color: '#0693e3', marginRight: 4 }}>HCM</Text>

                </View>
              </TouchableOpacity>
              <View style={{ flex: 5, justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextInput
                  placeholderTextColor={"#333333"}
                  placeholder={"Tìm quận, tên đường"}
                  value={nameSearch}
                  onChangeText={nameSearch => {
                    this._onProcessSearch(nameSearch),
                      this.setState({ nameSearch })
                  }}
                  onFocus={this.onFocus.bind(this)}
                  onBlur={this.onBlur.bind(this)}
                  returnKeyType="search"
                  onSubmitEditing={() => this.handlerSearch(nameSearch)}
                />
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {iconClone}
              </View>
            </View>
          </View>
          <View style={body}>
            
            <View style={{ height: height * 0.35, marginHorizontal: 20 }}>
              <View style={{ flexDirection: 'row', height: 40 }}>
                <View style={{ alignItems: 'flex-start', flex: 1 }}>
                  <Text >{RangeLow} triệu</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                  <Text >{RangeHigh} triệu</Text>
                </View>
              </View>
              <RangeSlider
                style={{ height: 80 }}
                gravity={'center'}
                min={1000}
                max={2500}
                step={20}
                textFormat="Price: %d"
                selectionColor="#3df"
                blankColor="#089cfb"
                onValueChanged={(low, high, fromUser) => {
                  this.formatRangeLow(low);
                  this.formatRangeHigh(high);
                  this.setState({ rangeLow: low, rangeHigh: high });
                }} />
              <View style={{ height: 40, backgroundColor: '#004c7e', justifyContent: 'center' }}>
                <TouchableOpacity >
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Áp Dụng</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 9, width: '100%',height:height }}>
                <FlatList
                data={data}
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
                      <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"#e91e63"}}>{item.rent_cost} triệu/phòng</Text>
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
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff0f3',
  },
  header: {
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: height * 0.9,
    width: '100%',
  },
  borderSearch: {
    flexDirection: 'row',
    width: width * 0.9,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#d9d9d9',
  },
});
