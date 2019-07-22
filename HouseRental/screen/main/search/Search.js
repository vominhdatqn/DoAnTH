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
      nameSearch: "",
      borderColor: '#d9d9d9',
      data: [],
      min: 700000,
      max: 7000000,
    };
  }
  formatRangeHigh(currentRangeHigh) {
    this.setState({ RangeHigh: currentRangeHigh });
  }
  formatRangeLow(currentRangeLow) {
    this.setState({ RangeLow: currentRangeLow });
  }
  formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e6).toFixed(1) + " triệu";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " triệu";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " tỷ";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
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
 async handlerSearch(nameSearch, RangeLow, RangeHigh) {
    try {
      const response = await searchStreet(nameSearch, RangeLow, RangeHigh);
      const responeJSON = await response.json();
        this.setState({data: responeJSON.data});
  } catch (error) {
    console.log(error);
    }
  };
  renderHeader = () => {
    return (
      <View style={{ marginLeft: 16, padding: 10 }}>
        <Text style={{}}>{`Kết quả tìm kiếm (${this.state.data.length})`}</Text>
      </View>
    );
  };
  render() {
    const { container, header, body, borderSearch } = styles;
    const { nameSearch, RangeHigh, borderColor, showClose, RangeLow, data, min, max } = this.state;
    const iconClone = showClose ? <Ionicons name="close" size={20} color="#0693e3" onPress={()=> this.setState({ nameSearch: '' })} /> : null;
   
    return (
      <SafeAreaView style={container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}
          style={{ flex: 1 }}>
           
          <View style={header}>
            <View style={[borderSearch, { borderColor }]}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
                  onSubmitEditing={() => this.handlerSearch(nameSearch, RangeLow, RangeHigh)}
                />
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {iconClone}
              </View>
            </View>
          </View>
          {/* <View style={body}> */}
          <ScrollView>
            <View style={{ height: height * 0.35, marginHorizontal: 20 }}>
              <View style={{ flexDirection: 'row', height: 40 }}>
                <View style={{ alignItems: 'flex-start', flex: 1 }}>
                  <Text >{this.formatCash(RangeLow)}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                  <Text >{this.formatCash(RangeHigh)}</Text>
                </View>
              </View>
              <RangeSlider
                style={{ height: 80 }}
                gravity={'center'}
                min={min}
                max={max}
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
                <TouchableOpacity onPress={() => this.handlerSearch(nameSearch, RangeLow, RangeHigh)}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>Áp Dụng</Text>
                </TouchableOpacity>
              </View>
            </View>

                <FlatList
                ListHeaderComponent={this.renderHeader}
                data={data}
                keyExtractor={(item,index) => `${item.house_id}`}
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
           
          {/* </View> */}
          </ScrollView>
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
