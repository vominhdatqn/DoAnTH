import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: []
    }
  }
  componentDidMount() {
    this.LoadInitState()
  }
  LoadInitState = async () => {
    var value = await AsyncStorage.getItem('token');
    // if(value !=null){
    //   this.setState({userName:value})
    // }
    fetch('http://192.168.206.2:3001/api/checkToken',{
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + value
            }
        })
        .then((res) =>res.json())
        .then((resJSON)=> {
         
          this.setState({
            userName:resJSON.user,
           
          })
          console.log(resJSON.user);
        })
        .catch(err => console.log(err))
  }
  async logout(){
    AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Auth');
    
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.userName.avatar}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.userName.username}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.logout.bind(this)}>
                <Text>Log Out</Text>  
              </TouchableOpacity>              
             
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});