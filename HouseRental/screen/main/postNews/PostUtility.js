import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar
} from 'react-native';
import pick from '../../../api/pick';
import { Button } from '../../../component/mobile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/actionCreator';


const { height, width } = Dimensions.get('window');

class PostUtility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: null,
      type: null,
      name: null,
    }

  }
  show() {
    pick((uri, type, name) => this.setState({ uri, type, name }));
    
  }
  _handlerAddItem(image) {
    this.props.addItem(image)
    setTimeout(() => {
      this.props.navigation.navigate('PostConfirm');
    }, 250);
  }
  render() {
    const {
      uri, type, name,
    } = this.state;
    const image = {
      uri,
      type,
      name,
    };
    const img = uri === null ? <Icon name="image" size={30} color="#089cfb" /> : 
      <Image source={{uri :`${uri}`}} style={{ height: "100%", width: "100%" }} resizeMode="cover" />;
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

            <Text style={{ fontSize: 14, fontFamily: 'Rotobo', fontWeight: 'bold' }}>Thông tin hình ảnh và tiện ích</Text>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 12, fontFamily: 'Rotobo', fontWeight: '400', color: 'gray' }}>Hình Ảnh</Text>
            </View>
            <View style={{ height: height * 0.25, width: '100%', borderWidth: 1, borderRadius: 5, borderColor: '#089cfb', borderStyle: 'dashed', alignItems: 'center', marginVertical: 10 }}>

              <View style={{ height: height * 0.15, width: width * 0.3, borderWidth: 1, borderRadius: 5, borderColor: 'gray', marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                {img}
              </View>

              <View style={{ height: height * 0.05, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.show()}>
                  <Text style={{ fontSize: 13, color: "#089cfb", fontFamily: 'Roboto', fontWeight: 'bold' }}>Đăng hình ảnh</Text>
                </TouchableOpacity>
              </View>

            </View>
            <Button onPress={() => this._handlerAddItem(image)}>
              Tiếp theo
            </Button>

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


export default connect(null, { addItem })(PostUtility);
