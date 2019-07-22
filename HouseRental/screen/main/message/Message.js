// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, Modal } from "react-native"
// import { WebView } from 'react-native-webview';
// export default class Message extends Component {
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
//               <WebView source={{ uri: "http://192.168.1.25:3001" }}
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

import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

    export default class Message extends React.Component {
      state = {
        messages: []
      };

      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: "I think we passed the first step of the tutorial. We will now need a Pusher account!",
              createdAt: new Date(),
              user: {
                _id: 1,
                name: "Võ Minh Đạt",
                avatar: "http://192.168.1.25:3001/uploads/imgFile1563375684647.jpg"
              }
            },
            {
                _id: 2,
                text: "Yeah!",
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: "Đoàn Thị Kim Khoa",
                  avatar: "https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p160x160/53077634_1324262101059499_3500367791842656256_n.jpg?_nc_cat=105&_nc_oc=AQlgwMno3v9telN6pbhHdM0amfYhLFny5iYTMc3B_yHKAQKz-Afa3Vy9q64nUfH-kj-MC6QUhU95Bsn27I8Oo2dt&_nc_ht=scontent-hkg3-2.xx&oh=e4d830bd445cdfad8e6509d8a7356fc3&oe=5DB366D8"
                }
              }
          ]
        });
      }
      
      render() {
        return <GiftedChat 
        messages={this.state.messages}
        />;
      }
    }