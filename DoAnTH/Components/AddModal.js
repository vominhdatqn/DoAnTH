import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Dimensions } from 'react-native';
import Modal from  'react-native-modal';
import RadioForm from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import {showLocation} from '../redux/actionCreator';

const screen = Dimensions.get('window');
class AddModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:0
    }
  }
  
  render() {
    var radio_props = [
      {label: 'Hồ Chí Minh', value: 0 },
      {label: 'Hà Nội', value: 1 },
      {label: 'Đà Nẵng', value: 2 }
    ];
    const {modalContent,button,textButton} = styles;
    const {isVisible} = this.props;
    const {value} = this.state;
    console.log("huhu"+isVisible)
    return (
      <Modal
        isVisible={isVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        onSwipeComplete={() => this.props.showLocation()}
        swipeDirection="left"
        onBackdropPress={() => this.props.showLocation()}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        <View style={modalContent}>
          <View style={{ height: screen.height * 0.1, width: "100%" }}>
            <Text style={{ fontSize: 20, color: '#000000', margin: 20 }}>Chuyển đổi khu vực tìm kiếm</Text>
          </View>
          <View style={{ height: screen.height * 0.15, width: "100%" }}>
            <RadioForm
              radio_props={radio_props}
              initial={value}
              buttonColor={'#525252'}
              buttonSize={10}
              buttonOuterSize={20}
              selectedButtonColor={'#000000'}
              labelStyle={{ fontSize: 20, }}
              style={{
                margin: 20, borderBottomWidth: 1,
                borderColor: '#ece6e6',
              }}
              selectedLabelColor={'#0693e3'}
              onPress={(value) => { this.setState({ value }) }}
            />
          </View>
          <TouchableOpacity onPress={() => this.props.showLocation()}>
            <View style={button}>
              <Text style={textButton}>Chuyển</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.showLocation()}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={[textButton, { color: 'black', textAlign: 'center' }]}>Hủy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    
    )
  }
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:'#0693e3',
    padding:14,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    borderColor:'rgba(0,0,0,0.1)'
  },
  modalContent:{
    height:screen.height*0.41,
    backgroundColor:'white',
    margin:20,
    borderRadius:6,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)',
  },
  textButton:{
    fontSize:16,
    color:'white',
    fontWeight:"400"
  },
})

function mapStateToProps(state){
    return {
      isVisible:state.modalReducer.isVisible
    };
}
export default connect(mapStateToProps,{showLocation})(AddModal);