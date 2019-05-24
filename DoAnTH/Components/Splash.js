import React, { Component } from 'react'
import { Text, StyleSheet, View,AsyncStorage } from 'react-native'
import { storageKey } from '../utils'
export default class Splash extends Component {

  async componentDidMount(){
    const {navigation} = this.props;
  
    const tokenStorage = await AsyncStorage.getItem(storageKey.token)
  
    if (tokenStorage && tokenStorage !== null) {
      // if exist ---> Main
      navigation.navigate('Main')
    } else {
      // else (no exist) ---> Auth
      navigation.navigate('Auth')
    }
  
  }
  render() {
      const {container,title} = styles;
    return (
      <View style={container}>
        <Text style={title}> Hello. This is Splash </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgb(32,53,70)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
       fontWeight:'bold',
       fontSize:18

    }
})
