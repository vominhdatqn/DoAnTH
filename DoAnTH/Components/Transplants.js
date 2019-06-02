import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    ScrollView,
    View,
    Text,Image,
    TextInput,StyleSheet,TouchableOpacity
} from 'react-native'
import pick from '../api/pick.js';
import RNFetchBlob from 'react-native-fetch-blob'
export default class Transplants extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatarSource:null,
            data:null,
            names:'',
            house:'',
           
         
        }
        
    }
    
  uploadImageToServer = () => {
 const {house,names,data} = this.state;
 
    RNFetchBlob.fetch('POST', 'http://192.168.1.252:3001/', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'avatar', filename: 'avatar.png', data:data },
        { name: 'ten', data : names },
        { name: 'nha', data : house },
       
      ])
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
//     const data = new FormData();
//     data.append('imgFile',(
//       avatarSource, 
//       type,
//       name
//     )
    
//  );
//     const config = {
//       method: 'POST',
//       headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'multipart/form-data',
//       },
//       body: data,
//      };
//      fetch("http://192.168.1.252:3001/", config)
//      .then((checkStatusAndGetJSONResponse)=>{       
//        console.log(checkStatusAndGetJSONResponse);
//      }).catch((err)=>{console.log(err)});

//     }
  
    show(){
      pick((source, data,type,name) => this.setState({avatarSource: source, data: data,type:type,name:name}));
    }

  render() {
    console.log(this.state.avatarSource);
    let img = this.state.avatarSource === null ? null :
    <Image source={this.state.avatarSource} style={{height:50,width:50}} />
    return (
        <ScrollView style = {{flex:1, backgroundColor: 'white'}} ref = 'scroll'>
          <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity onPress={this.show.bind(this)}>
            <Text>Select Image</Text>
        </TouchableOpacity>
        
        {img}
        <TextInput 
        value={this.state.names}
        placeholder="Name"
        onChangeText={names => this.setState({names})}
        />
        <TextInput 
        value={this.state.house}
        placeholder="House"
        onChangeText={house => this.setState({house})}
        />
        <TouchableOpacity onPress={this.uploadImageToServer} style={{height:50,width:50}}>
            <Text>Upload Server</Text>
        </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
    )
} 
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
