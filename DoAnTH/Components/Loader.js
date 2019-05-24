import React, { Component  } from 'react';
import {  StyleSheet, View,Image,Modal } from 'react-native';
import PropTypes from 'prop-types';

export default class Loader extends Component {
   
  render() {
   
    const { wrapper, loaderImage } = styles;
    const { animationType, modalVisible } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
      >
        <View style={wrapper}>
          <Image style={loaderImage} source={require('./img/modalLoading.gif')} />
        </View>
      </Modal>
    )
  }
}
Loader.propTypes={
  animationType: PropTypes.string.isRequired,
  modalVisible:PropTypes.bool.isRequired,
}
const styles = StyleSheet.create({
    wrapper:{
        zIndex:9,
        backgroundColor:'rgba(0,0,0,0.6)',
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        justifyContent:'center',
        alignItems:'center'
    },
    loaderImage:{
        width:130,
        height:100,
        backgroundColor:null
    }
})
