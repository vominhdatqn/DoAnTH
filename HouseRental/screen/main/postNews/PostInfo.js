import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';
// import pick from '../api/pick.js';
import { TextField, Button } from '../../../component/mobile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/actionCreator';
const { height } = Dimensions.get('window');

class PostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate_id: 1,
      area: '',
      rent_cost: null,
      Deposit: null,
      internet: null,
      electric_money: null,
      water_money: null,
      capacity: null,
      
      gender: 'Nam',
    }

  }
  _handlerAddItem(info){
    this.props.addItem(info)
    setTimeout(() => {
     this.props.navigation.navigate('PostUtility');
    }, 250);
  }

  render() {
    const {
       gender, cate_id, rent_cost,
      Deposit,internet,electric_money,water_money,capacity
    } = this.state;
    const info = { 
      gender,
      cate_id,
      rent_cost,
      Deposit,
      internet,
      electric_money,
      water_money,
      capacity
    };
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={{ height: height * 0.1, flexDirection: 'row',backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
        <View style={{ flex: 1,justifyContent:'center',alignItems: 'center' }}>
            <Icon  name="chevron-left" size={30} onPress={() => this.props.navigation.goBack()} />
            </View>
          <View style={{ flex: 3,justifyContent:'center' }}>
                <Text style={{ fontSize: 14,fontFamily:'Rotobo',fontWeight:'400',textAlign:'center'}}>Đăng phòng</Text>
            </View>
            <View style={{ flex: 1,justifyContent:'center' }}>
                <Text style={{ fontSize: 14,fontFamily:'Rotobo',fontWeight:'400',textAlign:'center'}}>Hủy</Text>
            </View>
        </View>
        <View style={{ height: height * 0.1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dddddd',alignItems:'center' }}>
          <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
            <View style={{flex: 1, justifyContent:'space-around'}}> 
                <View style={{height: 28,width:28,borderRadius:28,borderWidth:1}}>
                  <Icon  name="location-on" size={25} />
                </View>
                  <Text style={{fontSize:13}}>Vị trí</Text>
            </View>
            <View style={{flex: 1,borderTopWidth:1,borderColor:'blue'}}> 

            </View>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
          <View style={{height: 28,width:28,borderRadius:28,borderWidth:1}}>
              <Icon  name="info-outline" size={25} />
            </View>
              <Text style={{fontSize:13}}>Thông tin</Text>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
          <View style={{height: 28,width:28,borderRadius:28,borderWidth:1}}>
              <Icon  name="home" size={25} />
            </View>
              <Text style={{fontSize:13}}>Tiện ích</Text>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
          <View style={{height: 28,width:28,borderRadius:28,borderWidth:1}}>
              <Icon  name="confirmation-number" size={25} />
            </View>
              <Text style={{fontSize:13}}>Xác nhận</Text>
          </View>
          
        </View>
          <ScrollView 
          keyboardShouldPersistTaps={'always'}
          style={{ height: height * 0.8, marginHorizontal:20}}
          showsVerticalScrollIndicator={false}
          >
            
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}

              style={{ flex: 1 }}>
                
                <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: 'bold' }}>Thông tin phòng</Text>
                  <TextField
                    label="Loại Phòng"
                    type="select"
                    inputProps={{
                      items: [
                        { label: 'Phòng cho thuê', key: '1', value: 1, },
                        { label: 'Nhà nguyên căn', key: '2', value: 2 },
                      ],
                      onValueChange: value => {
                        this.setState({
                          cate_id: value,
                        });
                      },
                    }}
                  />
                  <TextField
                    label="Sức Chứa"
                    inputProps={{
                      placeholder: 'Vui lòng nhập sức chứa!',
                      placeholderTextColor: '#b3b3b3',
                      value: capacity,
                      onChangeText: capacity => {
                        // this._onProcessEmailChange(email);
                        this.setState({ capacity });
                      },
                    }}
                  />
                  <TextField
                    label="Giới Tính"
                    type="select"
                    inputProps={{
                      items: [
                        { label: 'Nam', key: 'nam', value: 'Nam', },
                        { label: 'Nữ', key: 'nu', value: 'Nữ' },
                      ],
                      onValueChange: value => {
                        this.setState({
                          gender: value,
                        });
                      },
                    }}
                  />
                  <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: 'bold' }}>Chi Phí</Text>
                  <TextField
                    label="Giá Cho Thuê"
                    inputProps={{
                      placeholder: 'Ví du: 1.000.000 = 1 ',
                      placeholderTextColor: '#b3b3b3',
                      value: rent_cost,
                      onChangeText: rent_cost => {
                        // this._onProcessEmailChange(email);
                        this.setState({ rent_cost });
                      },
                    }}
                  />
                  <TextField
                    label="Đặt Cọc"
                    inputProps={{
                      placeholder: 'Ví du: 1.000.000 = 1 ',
                      placeholderTextColor: '#b3b3b3',
                      value: Deposit,
                      onChangeText: Deposit => {
                        // this._onProcessEmailChange(email);
                        this.setState({ Deposit });
                      },
                    }}
                  />
                  <TextField
                    label="Tiền Điện"
                    inputProps={{
                      placeholder: 'Ví du: 5.000 đồng/kWh',
                      placeholderTextColor: '#b3b3b3',
                      value: electric_money,
                      onChangeText: electric_money => {
                        // this._onProcessEmailChange(email);
                        this.setState({ electric_money });
                      },
                    }}
                  />
                  <TextField
                    label="Tiền Nước"
                    inputProps={{
                      placeholder: 'Ví du: 5.000 đồng/m3',
                      placeholderTextColor: '#b3b3b3',
                      value: water_money,
                      onChangeText: water_money => {
                        // this._onProcessEmailChange(email);
                        this.setState({ water_money });
                      },
                    }}
                  />
                  <TextField
                    label="Internet"
                    inputProps={{
                      placeholder: 'Ví du: 100.000 đồng/tháng',
                      placeholderTextColor: '#b3b3b3',
                      value: internet,
                      onChangeText: internet => {
                        // this._onProcessEmailChange(email);
                        this.setState({ internet });
                      },
                    }}
                  />
                  <View style={{marginBottom: 20}}>
                  <Button onPress={() => this._handlerAddItem(info)}>
                    Tiếp theo
                  </Button>
                  </View>
                  {/* onPress={() => this.props.navigation.navigate('PostUtility',{ info, loca} )} */}
            </KeyboardAvoidingView>
          </ScrollView>
</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default connect(null, { addItem })(PostInfo);