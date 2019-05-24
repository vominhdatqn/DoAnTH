import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Message extends Component {
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
