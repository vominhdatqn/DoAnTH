/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
}
  from 'react-native';
import { Checkbox, TextField, Button } from '../../../component/mobile';
import { emailRegex, passwordRegex } from '../../../constants/regexp';
import signin from '../../../api/signin';
import { connect } from 'react-redux';
import { saveUserToken } from '../../../redux/actionCreator';
const { width, height } = Dimensions.get('window');
 class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      color: 'rgba(111, 111, 111, 0.2)',
      email: '',
      password: '',
      marginHorizontal: 56,
      checked: false,
    };
  }

  validateEmail = email => {
    const re = emailRegex;
    return re.test(email);
  };
  validatePassword = password => {
    const re = passwordRegex;
    return re.test(password);
  };
  _onProcessEmailChange(currentEmail) {
    if (!currentEmail) {
      this.setState({
        errorEmail: 'Please enter an email address',
        validEmail: true,
        editablePassword: false,
        validButton: true,
      });
    } else if (currentEmail.length < 8 && currentEmail) {
      this.setState({
        errorEmail: 'At least 8 characters',
        validEmail: true,
        editablePassword: false,
        validButton: true,
      });
    } else if (!this.validateEmail(currentEmail)) {
      this.setState({
        errorEmail: 'Your email address is invalid',
        validEmail: true,
        editablePassword: false,
        validButton: true,
      });
    } else {
      this.setState({
        errorEmail: '',
        validEmail: false,
        editablePassword: true,
        validButton: false,
      });
    }
  }
  _onProcessPasswordChange(currentPassword) {
    if (!currentPassword) {
      this.setState({
        errorPassword: 'Please enter an password',
        validPassword: true,
        validButton: true,
        editableEmail: false,
      });
    } else if (!this.validatePassword(currentPassword)) {
      this.setState({
        errorPassword: 'At least 8 characters',
        validPassword: true,
        validButton: true,
        editableEmail: false,
      });
    } else {
      this.setState({
        errorPassword: '',
        validPassword: false,
        validButton: false,
        editableEmail: true,
      });
    }
  }

  handlerSignIn = async () => {
    const { email, password } = this.state;

    if (email === '' && password === '') {
      this.setState({
        errorEmail: 'Please enter an email address',
        validEmail: true,
        errorPassword: 'Please enter an password',
        validPassword: true,
        validButton: true,
      });
    } else if (email === '') {
      this.setState({
        errorEmail: 'Please enter an email address',
        validEmail: true,
        validButton: true,
      });
    } else if (password === '') {
      this.setState({
        errorPassword: 'Please enter an password',
        validPassword: true,
        validButton: true,
      });
    } else if (this.state.checked === false) {
      console.log('no checked');
    } else {
      try {
        signin(email, password)
        .then(responseJson => {
          console.log("sucess:  ", responseJson.success);
          console.log("token::::", responseJson.token);
          if(responseJson.success){
            const user = responseJson.token;
            this.props.saveUserToken(user)
            .then(() => this.props.navigation.navigate('Main'));
        }
        })
      } catch (error) {
        console.log(error);
      }
    }
  }


  render() {
    const {
      container, header, logo, body, footer, titleText, viewTextField,
    } = styles;
    const {
      email, password, marginHorizontal, validButton,
    } = this.state;
    return (
      <SafeAreaView style={container}>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}

            style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <View style={container}>
              <View style={header}>
                <Image
                  source={require('../../../assets/img/logo.png')}
                  style={logo}
                />
              </View>
              <View style={body}>
                <View style={[viewTextField, { marginHorizontal }]}>
                  <TextField
                    label="Email/Username"
                    inputProps={{
                      placeholder: 'Email / Username',
                      placeholderTextColor: '#b3b3b3',
                      value: email,
                      // eslint-disable-next-line no-shadow
                      onChangeText: email => {
                        this._onProcessEmailChange(email);
                        this.setState({ email });
                      },
                      editable: this.state.editableEmail,
                    }}
                    helperText={this.state.errorEmail}
                    error={this.state.validEmail}
                    required={this.state.validEmail}
                  />
                </View>
                <View style={[viewTextField, { marginHorizontal }]}>
                  <TextField
                    label="Password"
                    inputProps={{
                      placeholder: 'Password',
                      placeholderTextColor: '#b3b3b3',
                      secureTextEntry: true,
                      value: password,
                      onChangeText: password => {
                        // this._onProcessPasswordChange(password);
                        this.setState({ password });
                      },
                      editable: this.state.editablePassword,
                    }}
                    helperText={this.state.errorPassword}
                    error={this.state.validPassword}
                    required={this.state.validPassword}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal, marginTop: 10 }}>
                  <Button onPress={this.handlerSignIn} disabled={validButton} >
                    Login
            </Button>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal }}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={() => this.setState({
                        checked: !this.state.checked,
                      })}
                    />
                    <Text style={[titleText, { color: '#757575' }]}> Remember Me</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TouchableOpacity >
                      <Text style={[titleText, { color: '#1a629a', textAlign: 'right' }]}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 2.5, marginHorizontal }}>
                  <View style={[header, { justifyContent: 'flex-end' }]}>
                    <Text style={[titleText, { color: '#757575', marginBottom: 10 }]}>Don’t have Comspaces Account?</Text>
                  </View>
                  <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 34,
                  }}
                  >
                    <Button type="sm" onPress={() => this.props.navigation.navigate('SignUp')}>
                      Sign Up
              </Button>
                  </View>
                </View>
              </View>
              <View style={[footer, { marginHorizontal: 23 }]}>
                <Text style={[titleText, { color: '#a4a4a4' }]}>
                  User Agreement | Privacy Policy
          </Text>
              </View>
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
    width: width,
    height: height,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3.5,
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(48, 51, 58, 0.1)',
  },
  logo: {
    width: 191,
    height: 30,
  },
  titleText: {
    color: '#b3b3b3',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  viewTextField: {
    flex: 1,
    marginBottom: 38,
  },
});



export default connect(null, { saveUserToken })(SignIn);