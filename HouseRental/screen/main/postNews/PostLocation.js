import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';
import { TextField, Button } from '../../../component/mobile';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { addItem } from '../../../redux/actionCreator';
const { height } = Dimensions.get('window');

class PostLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guild: '',
      Street: '',
      apartment_number: '',
      items: [
        { label: 'Hồ Chí Minh', key: 'hcm', value: 'Hồ Chí Minh', },
        { label: 'Hà Nội', key: 'hn', value: 'Hà Nội' },
      ],
      valueCity: 'Hồ Chí Minh',
      valueTownShip: 'Quận 1'
    }

  }
  _handlerAddItem(location){
    this.props.addItem(location)
    // setTimeout(() => {
     this.props.navigation.navigate('PostInfo');
    // }, 250);
  }
  render() {
    const {
      items, valueTownShip, valueCity, guild,
      Street, apartment_number,
    } = this.state;
    const location = {
      township: valueTownShip,
      city: valueCity,
      guild,
      Street: `${apartment_number}, ${Street}`,
    };
    console.log(this.props.arrPost);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={{ height: height * 0.1, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: '400', textAlign: 'center' }}>Đăng phòng</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: '400', textAlign: 'center' }}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: height * 0.1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dddddd', alignItems: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            {/* <View style={{ flex: 1, justifyContent: 'space-around' }}>
              <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
                <Icon name="location-on" size={25} />
              </View>
              <Text style={{ fontSize: 13 }}>Vị trí</Text>
            </View> */}
            <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: 28, width: 28, borderRadius: 28, borderWidth: 1 }}>
            <Icon name="location-on" size={25} />
            </View>
            <Text style={{ fontSize: 13 }}>Vị trí</Text>
          </View>
            {/* <View style={{ flex: 1, borderTopWidth: 1, borderColor: 'blue' }}>

            </View> */}
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

            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: 'bold' }}>Địa chỉ</Text>
            <TextField
              label="Thành Phố"
              type="select"
              inputProps={{
                items,
                onValueChange: value => {
                  this.setState({
                    valueCity: value,
                  });
                },
              }}
            />
            <TextField
              label="Quận/Huyện"
              type="select"
              inputProps={{
                items: [
                  { label: 'Quận 1', key: 'q1', value: 'Quận 1' },
                  { label: 'Quận 2', key: 'q2', value: 'Quận 2' },
                  { label: 'Quận 3', key: 'q3', value: 'Quận 3' },
                  { label: 'Quận 4', key: 'q4', value: 'Quận 4' },
                  { label: 'Quận 5', key: 'q5', value: 'Quận 5' },
                  { label: 'Quận 6', key: 'q6', value: 'Quận 6' },
                  { label: 'Quận 7', key: 'q7', value: 'Quận 7' },
                  { label: 'Quận 8', key: 'q8', value: 'Quận 8' },
                  { label: 'Quận 9', key: 'q9', value: 'Quận 9' },
                  { label: 'Quận 10', key: 'q10', value: 'Quận 10' },
                  { label: 'Quận 11', key: 'q11', value: 'Quận 11' },
                  { label: 'Quận 12', key: 'q12', value: 'Quận 12' },
                  { label: 'Quận Bình Tân', key: 'qbta', value: 'Quận Bình Tân' },
                  { label: 'Quận Bình Thạnh', key: 'qbt', value: 'Quận Bình Thạnh' },
                  { label: 'Quận Gò Vấp', key: 'qgv', value: 'Quận Gò Vấp' },
                  { label: 'Quận Phú Nhuận', key: 'qpn', value: 'Quận Phú Nhuận' },
                  { label: 'Quận Tân Bình', key: 'qtb', value: 'Quận Tân Bình' },
                  { label: 'Quận Tân Phú', key: 'qtp', value: 'Quận Tân Phú' },
                  { label: 'Quận Thủ Đức', key: 'qtd', value: 'Quận Thủ Đức' },
                  { label: 'Quận Bình Chánh', key: 'qbc', value: 'Quận Bình Chánh' },
                ],
                onValueChange: value => {
                  this.setState({
                    valueTownShip: value,
                  });
                },
              }}
            />
            <TextField
              label="Phường"
              inputProps={{
                placeholder: 'Vui lòng nhập phường!',
                placeholderTextColor: '#b3b3b3',
                value: guild,
                onChangeText: guild => {
                  // this._onProcessEmailChange(email);
                  this.setState({ guild });
                },
              }}
            />
            <TextField
              label="Tên Đường"
              inputProps={{
                placeholder: 'Vui lòng nhập tên đường!',
                placeholderTextColor: '#b3b3b3',
                value: Street,
                onChangeText: Street => {
                  // this._onProcessEmailChange(email);
                  this.setState({ Street });
                },
              }}
            />
            <TextField
              label="Số Nhà"
              inputProps={{
                placeholder: 'Ví dụ : 292/6a',
                placeholderTextColor: '#b3b3b3',
                value: apartment_number,
                onChangeText: apartment_number => {
                  // this._onProcessEmailChange(email);
                  this.setState({ apartment_number });
                },
              }}
            />
            <View style={{ marginBottom: 20 }}>
              <Button onPress={() => this._handlerAddItem(location)}>
                Tiếp theo
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
    flex: 1
  }
});
const mapStateToProps = state => ({
  arrPost: state.postReducer.arr,
});

export default connect(mapStateToProps, { addItem })(PostLocation);