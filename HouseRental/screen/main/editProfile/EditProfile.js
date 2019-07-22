import React, { Component } from 'react'
import { Text, StyleSheet, Alert, View, Image, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux';
import { TextField, Button } from '../../../component/mobile';
import { updateProfile } from '../../../redux/actionCreator';
import pick from '../../../api/pick';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.profile[0].email,
      phone: this.props.profile[0].phone,
      username: this.props.profile[0].username,
      address: this.props.profile[0].address,
      password: this.props.profile[0].password,
      avatar: this.props.profile[0].avatar,
      type: null,
      name: null,
    }
  }
  show() {
    pick((uri, type, name) => this.setState({ avatar: uri, type, name }));
  }
   update = async (editProfile) => {

    const config = { headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
     } };
    const formData = new FormData();
      formData.append('imgFile', {
        uri: editProfile.avatar,
        type: editProfile.type,
        name: editProfile.name,
      });
      formData.append('username', editProfile.username);
      formData.append('password', editProfile.password);
      formData.append('email', editProfile.email);
      formData.append('phone', editProfile.phone);
      formData.append('address', editProfile.address);
      formData.append('userID', editProfile.userID);
      const response = await axios.post('http://192.168.1.25:3001/updateProfile', formData, config);
      const { status } = response.data;
      if (status === 200) {
        this.props.updateProfile(editProfile);
        Alert.alert(
          'Message',
          'Edit Profile successfully',
          [
            {text: 'OK', onPress: () => this.props.navigation.goBack()},
          ],
          {cancelable: false},
        );
      }
  }
  render() {
const loading = this.props.loading ? (<ActivityIndicator size="large" color="#089cfb" />) : null;
console.log(this.props.loading);
    const { email, phone, username, address, password, avatar, type, name } = this.state;
    const { cate_userID, date, userID } = this.props.profile[0];
    // console.log(this.props.profile);
    const editProfile = {
      email,
      phone,
      username,
      address,
      password,
      avatar,
      cate_userID,
      userID,
      type,
      name,
    }
    const img = this.props.profile.avatar !== ''
      ?
      (<TouchableOpacity style={styles.button} onPress={() => this.show()}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
      </TouchableOpacity>)
      : <TouchableOpacity style={styles.button}>
        <Image style={styles.avatar} source={require('../../../assets/img/avatar.jpg')} />
      </TouchableOpacity>;
    return (
      <View style={{ flex: 1 }}>
        
          <View style={{ height: 71, flexDirection: 'row', backgroundColor: '#004c7e', alignItems: 'center' }}>
            <View style={{ alignItems: 'flex-start', flex: 1, marginHorizontal: 18 }}>
              <Icon name="angle-left" size={25} color="white" onPress={() => this.props.navigation.goBack()} />
            </View>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>Edit Profile</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, marginHorizontal: 18 }}>
              <Text style={{ color: 'white' }} onPress={() => this.update(editProfile)}>Update</Text>
            </View>
          </View>
          <ScrollView>
          <View>
            <ImageBackground style={{ height: 150 }} source={{ uri: 'https://images.unsplash.com/photo-1561378137-e40d3723d0df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=756&q=80' }} >
              {img}
              {loading}
            </ImageBackground>
          </View>

          <TextField
            label="Email"
            inputProps={{
              placeholder: 'Please enter an email',
              placeholderTextColor: '#b3b3b3',
              value: email,
              onChangeText: (email) => {
                this.setState({ email });
              },
            }}
            required={true}

          />
          <TextField
            label="Name"
            inputProps={{
              placeholder: 'Please enter an name',
              placeholderTextColor: '#b3b3b3',
              value: username,
              onChangeText: (username) => {
                this.setState({ username });
              },
            }}
            required={true}

          />
          <TextField
            label="Phone"
            inputProps={{
              placeholder: 'Please enter an phone',
              placeholderTextColor: '#b3b3b3',
              value: phone,
              onChangeText: (phone) => {
                this.setState({ phone });
              },
            }}
            required={true}
          />
          <TextField
            label="Password"
            inputProps={{
              placeholder: 'Please enter an password',
              placeholderTextColor: '#b3b3b3',
              secureTextEntry: true,
              value: password,
              onChangeText: (password) => {
                this.setState({ password });
              },
            }}
            required={true}
          />
          <TextField
            label="Address"
            inputProps={{
              placeholder: 'Please enter an address',
              placeholderTextColor: '#b3b3b3',
              value: address,
              onChangeText: (address) => {
                this.setState({ address });
              },
            }}
            required={true}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,

    // marginTop:130
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: -36,
    right: 10
  }
})

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
});

export default connect(mapStateToProps, { updateProfile })(EditProfile);