import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    ScrollView,
    View,
    Text,Image,
    Alert,
    TextInput,StyleSheet,TouchableOpacity,
   
} from 'react-native'
import pick from '../api/pick.js';

export default class Transplants extends Component {
    constructor(props){
        super(props);
        this.state = {
            ten:'',
            house:'',
         
        }
       
    }
  //   try {
  //     const config = {
  //       method: 'POST',
  //       headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //       },
  //       body: data,
  //   }
  //   const res = await fetch('http://192.168.1.28:3001/upload',config);
  //   if (res.ok) {
  //     console.log(res);
  //     return res;
  // } else {
  //    console.log("lỗi");
  // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  uploadImageToServer(){
     const {URI,TYPE,NAME,ten,house} = this.state;

     const data = new FormData(); 

      data.append('imgFile', {  
      uri:URI.uri, 
      type:TYPE.type,
      name:NAME.name,
      });
      // data.append('ten',ten);
      // data.append('house',house);
      
      // const config = {
      //   method: 'POST',
      //   headers: {
         
      //    'Content-Type': 'multipart/form-data',
      //   },
      //   body: data,
      //  };
      fetch('http://192.168.1.252:3001/upload',{ method: 'POST',headers: {  
        "Content-Type": "multipart/form-data",
        "otherHeader": "foo",
        } , body: data })
     .then((res) => res.json())
     .then((res) => { console.log("response" +JSON.stringify(res)); })
     .catch((e) => console.log(e))
     .done()
   }
  
    show(){
      pick((uri,type,name) => this.setState({URI:uri,TYPE:type,NAME:name}));
    }

  render() {
    
    let img = this.state.URI === null ? null :
    <Image source={this.state.URI} style={{height:50,width:50}} />
    return (
        <ScrollView style = {{flex:1, backgroundColor: 'white'}} ref = 'scroll'>
          <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity onPress={this.show.bind(this)}>
            <Text>Select Image</Text>
        </TouchableOpacity>
        {img}
        <TextInput 
        value={this.state.ten}
        placeholder="Name"
        onChangeText={ten => this.setState({ten})}
        />
        <TextInput 
        value={this.state.house}
        placeholder="House"
        onChangeText={house => this.setState({house})}
        />
        <TouchableOpacity onPress={this.uploadImageToServer.bind(this)} style={{height:50,width:50}}>
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
