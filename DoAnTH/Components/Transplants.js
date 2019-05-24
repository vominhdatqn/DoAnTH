import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    ScrollView,
    View,
    TextInput,StyleSheet
} from 'react-native'

export default class Transplants extends Component {
  render() {
    return (
        <ScrollView style = {{flex:1, backgroundColor: 'white'}} ref = 'scroll'>
          <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
               
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
