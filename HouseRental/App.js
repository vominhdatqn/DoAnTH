
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import Root from './navigation/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

// import pick from './api/pick';
// import SignIn from './screen/auth/signin';
// import SignUp from './screen/auth/signup';
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     URI: null,
  //   };
  // }
  // uploadImageToServer = async () => {
  //   const { URI, TYPE, NAME } = this.state;

  //   const data = new FormData();

  //   data.append('imgFile', {
  //     uri: URI.uri,
  //     type: TYPE.type,
  //     name: NAME.name,
  //   });

  //   try {
  //     const response = await fetch('http://192.168.1.252:3001/upload', {
  //       method: 'POST', headers: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "application/json"
  //       }, body: data
  //     });
  //     const responseJson = await response.json();
  //     if (responseJson.status === 200) {
  //       this.setState({ URI: null, TYPE: null, NAME: null })
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }


  // }

  // show() {
  //   pick((uri, type, name) => this.setState({ URI: uri, TYPE: type, NAME: name }));
  // }
  render() {
    // let img = this.state.URI === null ? null :
    //   <Image source={this.state.URI} style={{ height: 50, width: 50 }} />
    return (
      // <ScrollView style={{ flex: 1, backgroundColor: 'white' }} ref='scroll'>
      //   <KeyboardAvoidingView behavior='position' style={{ backgroundColor: 'white', flex: 1 }}>
      //     <TouchableOpacity onPress={this.show.bind(this)}>
      //       <Text>Select Image</Text>
      //     </TouchableOpacity>
      //     {img}
      //     <TextInput
      //       value={this.state.ten}
      //       placeholder="Name"
      //       onChangeText={ten => this.setState({ ten })}
      //     />
      //     <TextInput
      //       value={this.state.house}
      //       placeholder="House"
      //       onChangeText={house => this.setState({ house })}
      //     />
      //     <TouchableOpacity onPress={this.uploadImageToServer} style={{ height: 50, width: 50 }}>
      //       <Text>Upload Server</Text>
      //     </TouchableOpacity>

      //   </KeyboardAvoidingView>
      // </ScrollView>
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
