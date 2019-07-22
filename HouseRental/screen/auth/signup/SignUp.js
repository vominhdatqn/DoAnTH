import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
}
  from 'react-native';
import { Checkbox, TextField, Button } from '../../../component/mobile';
import { emailRegex, passwordRegex, nameRegex } from '../../../constants/regexp';
import signUp from '../../../api/signup'; 
const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'rgba(111, 111, 111, 0.2)',
      marginHorizontal: 56,
      marginTop: 15,
      username: '',
      email: '',
      password: '',
      checked: false,
    };
  }

  validateName = username => {
    const re = nameRegex;
    return re.test(username);
  };

  validateEmail = email => {
    const re = emailRegex;
    return re.test(email);
  };
  validatePassword = password => {
    const re = passwordRegex;
    return re.test(password);
  };
  _onProcessNameChange(currentName) {
    if (!currentName) {
      this.setState({
        errorName: 'Please enter an name',
        validName: true,
        editableEmail: false,
      });
    } else if (currentName.length < 6 && currentName) {
      this.setState({
        errorName: 'At least 6 characters',
        validName: true,
        editableEmail: false,
      });
    } else if (!this.validateName(currentName)) {
      this.setState({
        errorName: 'Your name is invalid',
        validName: true,
        editableEmail: false,
      });
    } else {
      this.setState({
        errorName: '',
        validName: false,
        editableEmail: true,
      });
    }
  }

  _onProcessEmailChange(currentEmail) {
    if (!currentEmail) {
      this.setState({
        errorEmail: 'Please enter an email address',
        validEmail: true,
        editablePassword: false,
      });
    } else if (currentEmail.length < 8 && currentEmail) {
      this.setState({
        errorEmail: 'At least 8 characters',
        validEmail: true,
        editablePassword: false,
      });
    } else if (!this.validateEmail(currentEmail)) {
      this.setState({
        errorEmail: 'Your email address is invalid',
        validEmail: true,
        editablePassword: false,
      });
    } else {
      this.setState({
        errorEmail: '',
        validEmail: false,
        editablePassword: true,
      });
    }
  }
  _onProcessPasswordChange(currentPassword) {
    if (!currentPassword) {
      this.setState({
        errorPassword: 'Please enter an password',
        validPassword: true,
      });
    } else if (!this.validatePassword(currentPassword)) {
      this.setState({
        errorPassword: 'At least 8 characters',
        validPassword: true,
      });
    } else {
      this.setState({
        errorPassword: '',
        validPassword: false,
      });
    }
  }
  handlerSignUp = async () => {
    const { username, email, password } = this.state;

    if (username === '' && email === '' && password === '') {
      this.setState({
        errorName: 'Please enter an name',
        validName: true,
        errorPassword: 'Please enter an password',
        validEmail: true,
        errorEmail: 'Your email address is invalid',
        validPassword: true,
      });
    } else if (this.state.checked === false) {
      console.log('no checked');
    } else {
      try {
        const response = await signUp(email, password, username);
        const responseJSON = await response.json();
        if (responseJSON.code === 200) {
          this.props.navigation.navigate("SignIn")
        }
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
      marginHorizontal, username, email, password, marginTop,
    } = this.state;
    return (
      <SafeAreaView style={container}>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}

            style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <View style={container} >
              <View style={header}>
                <Image
                  source={require('../../../assets/img/logo.png')}
                  style={logo}
                />
              </View>
              <View style={body}>
                <View style={[viewTextField, { marginHorizontal }]}>
                  <TextField
                    label="Name"
                    inputProps={{
                      value: username,
                      onChangeText: (username) => {
                        this._onProcessNameChange(username);
                        this.setState({ username });
                      },
                    }}
                    helperText={this.state.errorName}
                    error={this.state.validName}
                    required={this.state.validName}
                  />
                </View>
                <View style={[viewTextField, { marginHorizontal }]}>
                  <TextField
                    label="Email"
                    inputProps={{
                      value: email,
                     
                      onChangeText: (email) => {
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
                      value: password,
                      secureTextEntry: true,
                     
                      onChangeText: (password) => {
                        this._onProcessPasswordChange(password);
                        this.setState({ password });
                      },
                      editable: this.state.editablePassword,
                    }}
                    helperText={this.state.errorPassword}
                    error={this.state.validPassword}
                    required={this.state.validPassword}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal, marginTop }}>
                  <Button onPress={this.handlerSignUp}>
                    Create Account
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
                    <Text style={[titleText, { color: '#757575' }]}>  I agree to all</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <Text style={[titleText, { color: '#1a629a', textAlign: 'right' }]}>Terms &amp; Conditions</Text>
                  </View>
                </View>
                <View style={{ flex: 1.5 }} />
              </View>
              <View style={[footer, { marginHorizontal: 23 }]}>
                <Text style={[titleText, { color: '#a4a4a4' }]}>User Agreement  |  Privacy Policy</Text>
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
    flex: 4.5,
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
