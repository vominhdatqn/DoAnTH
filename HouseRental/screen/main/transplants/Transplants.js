// // // import React, { useState, useEffect } from 'react';
// // // import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
// // // import axios from 'axios';
// // // const Transplants = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [firstRender, setFirstRender] = useState(true);
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   console.log(email);

// // //  const fetchUsers = async () => {
// // //   const response = await axios.get('http://192.168.43.113:3001/');
// // //   const responseJSON = response.data;
// // //   console.log(responseJSON.data);
// // //   setUsers(responseJSON.data);
// // // };
// // // useEffect(() => {
// // //   if (firstRender) {
// // //           fetchUsers(users)
// // //           setFirstRender(false);
// // //         }
// // //    });
// // // console.log("userNe",users);
// // //   handleClick = () => {
// // //     console.log(email);
// // //     console.log(password)
// // //   }
// // //   return (
// // //     <View style={styles.container}>
// // //         <TextInput 
// // //           value={email}
// // //           placeholder="Email"
// // //           onChangeText={(event) => setEmail(event)}
// // //         />
// // //         <TextInput 
// // //           value={password}
// // //           placeholder="Password"
// // //           onChangeText={(event) => setPassword(event)}
// // //         />
// // //         <TouchableOpacity onPress={this.handleClick}>
// // //             <Text>Click</Text>
// // //         </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // export default Transplants;
// // // const styles = StyleSheet.create({
// // //     container: {
// // //       flex: 1,
// // //     }
// // // })
// // // import React, { Component } from 'react'
// // // import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
// // // import getTest from '../../../api/getTest';
// // // import { getUserToken } from '../../../redux/actionCreator';
// // // import { connect } from 'react-redux';

// // // class Transplants extends Component {
  
// // //   // fetchUser = async () => {
// // //   //   const response = await axios.get('http://192.168.1.15:3001/');
// // //   //   console.log(response.data);
// // //   // }
// // //   // componentDidMount() {
// // //   //   this.fetchUser();
// // //   // }

// // //   fetchUser = async () => {
// // //     this.props.getUserToken()
// // //     .then(() => {
// // //       getTest(this.props.token)
// // //       .then(respone => console.log("resspone",respone.data))
// // //       .catch(error => console.log("errror",error))
// // //     });
// // //   }

// // //   render() {
   
// // //     return (
// // //       <View>
// // //         <TouchableOpacity onPress={this.fetchUser}>
// // //         <Text> textInComponent </Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     )
// // //   }
// // // }

// // // const styles = StyleSheet.create({})

// // // const mapStateToProps = (state) => ({
// // //   token: state.tokenReducer.token,
// // // });

// // // export default connect(mapStateToProps, { getUserToken })(Transplants);
// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, Modal } from "react-native"
// import { WebView } from 'react-native-webview';
// export default class Transplants extends Component {
//   state = {
//     showModal: false,
//     status: "Pending"
// };
// handleResponse = data => {
//   if (data.title === "success") {
//       this.setState({ showModal: false, status: "Complete" });
//   } else if (data.title === "cancel") {
//       this.setState({ showModal: false, status: "Cancelled" });
//   } else {
//       return;
//   }
// };
// render() {
//   return (
//       <View style={{ marginTop: 100 }}>
//           <Modal
//               visible={this.state.showModal}
//               onRequestClose={() => this.setState({ showModal: false })}
//           >
//               {/* <WebView.
//                   source={{ uri: "http://192.168.77.103:3001" }}
//                   onNavigationStateChange={data =>
//                       this.handleResponse(data)
//                   }
//                   injectedJavaScript={`document.f1.submit()`}
//               /> */}
//               <WebView source={{ uri: "http://192.168.43.113:3001" }}
//                   onNavigationStateChange={data =>
//                       this.handleResponse(data)
//                   }
//                   injectedJavaScript={`document.f1.submit()`}
//               /> 
//           </Modal>
//           <TouchableOpacity
//               style={{ width: 300, height: 100 }}
//               onPress={() => this.setState({ showModal: true })}
//           >
//               <Text>Pay with Paypal</Text>
//           </TouchableOpacity>
//           <Text>Payment Status: {this.state.status}</Text>
//           <Text>Payment Status: {this.state.status}</Text>
//       </View>
//   );
// }
// }
