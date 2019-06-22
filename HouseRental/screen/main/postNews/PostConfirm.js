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
import { TextField, Button } from '../../../component/mobile';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { removeItem, getUserToken } from '../../../redux/actionCreator';
import checkToken from '../../../api/checkToken';
const { height } = Dimensions.get('window');

class PostConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      houseName: ``,
      note: '',
    }

  }

  componentDidMount() {
    this.onProcessHouseName();
  }
  onProcessHouseName = async () => {
    const { token } = this.props;
    const { Street } = this.props.arrPost[0];
    console.log(Street);
    console.log(token);
    if (token !== null) {
      const response = await checkToken(token);
      const responseJSON = response.user;
      this.setState({ phone: responseJSON.phone, houseName: `${Street}` });
    }

  }
  async uploadImageToServer(
    uri,
    type,
    name,
    township,
    city,
    guild,
    Street,
    gender,
    cate_id,
    rent_cost,
    Deposit,
    internet,
    electric_money,
    water_money,
    capacity,
    token,
    houseName,
    phone,
    note,
  ) {


    if (token !== null) {
      const responseJSON = await checkToken(token);
      const { userID } = responseJSON.user;

      const formData = new FormData();

      formData.append('imgFile', {
        uri,
        type,
        name,
      });
      formData.append('township', township);
      formData.append('city', city);
      formData.append('guild', guild);
      formData.append('Street', Street);
      formData.append('gender', gender);
      formData.append('cate_id', cate_id);
      formData.append('rent_cost', rent_cost);
      formData.append('Deposit', Deposit);
      formData.append('internet', internet);
      formData.append('electric_money', electric_money);
      formData.append('water_money', water_money);
      formData.append('capacity', capacity);
      formData.append('userID', userID);
      formData.append('houseName', houseName);
      formData.append('phone', phone);
      formData.append('note', note);
      
      // formData.append('township',township);
      try {
        // const response = await fetch('http://192.168.1.252:3001/upload', {
        const response = await fetch('http://192.168.1.15:3001/upload', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          body: formData
        },);
        const responseJSON = await response.json();

        if (responseJSON.status === 200) {
          this.props.removeItem();
          this.props.navigation.navigate('Home');
        }
      } catch (error) {
        console.log("lỗi",error);
      }
    }

  }
  render() {
    const {
      phone, houseName, note,
    } = this.state;

    if (this.props.arrPost.length === 0) return null;

    const { township, city, guild, Street } = this.props.arrPost[0];
    const {
      gender,
      cate_id,
      rent_cost,
      Deposit,
      internet,
      electric_money,
      water_money,
      capacity,
    } = this.props.arrPost[1];
    const { uri, type, name } = this.props.arrPost[2];
    this.props.getUserToken().then(() => this.props.token);

    // console.log("postconfirm", this.props.arrPost);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={{ height: height * 0.1, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="chevron-left" size={30} onPress={() => this.props.navigation.goBack()} />
          </View>
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: '400', textAlign: 'center' }}>Đăng phòng</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: '400', textAlign: 'center' }}>Hủy</Text>
          </View>
        </View>
        <View style={{ height: height * 0.1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dddddd', alignItems: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'space-around' }}>
              <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
                <Icon name="location-on" size={25} />
              </View>
              <Text style={{ fontSize: 13 }}>Vị trí</Text>
            </View>
            <View style={{ flex: 1, borderTopWidth: 1, borderColor: 'blue' }}>

            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
              <Icon name="info-outline" size={25} />
            </View>
            <Text style={{ fontSize: 13 }}>Thông tin</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
              <Icon name="home" size={25} />
            </View>
            <Text style={{ fontSize: 13 }}>Tiện ích</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
              <Icon name="confirmation-number" size={25} />
            </View>
            <Text style={{ fontSize: 13 }}>Xác nhận</Text>
          </View>

        </View>
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={{ height: height * 0.8, marginHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >

          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}

            style={{ flex: 1 }}>

            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: 'bold' }}>Xác nhận thông tin</Text>
            <TextField
              label="Số Điện Thoại"
              inputProps={{
                placeholder: 'Nhập số điện thoại của bạn!',
                placeholderTextColor: '#b3b3b3',
                value: phone,
                onChangeText: phone => {
                  // this._onProcessEmailChange(email);
                  this.setState({ phone });
                },
              }}
            />
            <TextField
              label="Tiêu Đề Bài Đăng"
              inputProps={{
                // placeholder: `${location.township}, ${location.city}`,
                placeholderTextColor: '#b3b3b3',
                value: houseName,
                onChangeText: houseName => {
                  // this._onProcessEmailChange(email);
                  this.setState({ houseName });
                },
              }}
            />
            <TextField
              label="Nội Dung Mô Tả"
              inputProps={{
                placeholder: 'Ví dụ : Môi trường sống sạch an ninh...',
                placeholderTextColor: '#b3b3b3',
                value: note,
                onChangeText: note => {
                  // this._onProcessEmailChange(email);
                  this.setState({ note });
                },
              }}
            />
            <View style={{ marginBottom: 20 }}>
              <Button onPress={
                () => this.uploadImageToServer(
                  uri,
                  type,
                  name,
                  township,
                  city,
                  guild,
                  Street,
                  gender,
                  cate_id,
                  rent_cost,
                  Deposit,
                  internet,
                  electric_money,
                  water_money,
                  capacity,
                  this.props.token,
                  houseName,
                  phone,
                  note,
                )
              }
              >
                Đăng phòng
                  </Button>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapStateToProps = state => ({
  arrPost: state.postReducer.arr,
  token: state.tokenReducer.token,
});


export default connect(mapStateToProps, { removeItem, getUserToken })(PostConfirm);
