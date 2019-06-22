import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../../redux/actionCreator';
 class Splash extends Component {

   componentDidMount(){
    // const { navigation } = this.props;
  
    // // const tokenStorage = await AsyncStorage.getItem(storageKey.token)
    

    // if (tokenStorage && tokenStorage !== null) {
    //   // if exist ---> Main
    //   navigation.navigate('Main')
    // } else {
    //   // else (no exist) ---> Auth
    //   navigation.navigate('Auth')
    // }
  this._handlerGetToken();
  }
  _handlerGetToken = () => {
    const { navigation } = this.props;
    try {
    //  this.props.getUserToken().then(() => console.log(this.props.token));
      this.props.getUserToken()
      .then(() => {
        navigation.navigate(this.props.token !== null ? 'Main' : 'Auth');
        // navigation.navigate(this.props.token !== null ? 'Auth' : 'Main');
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
      const { container, title } = styles;
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
        justifyContent:'center',
    },
    title:{
       fontWeight:'bold',
       fontSize:18,

    },
});
const mapStateToProps = state => ({
  token: state.tokenReducer.token,
});


// const mapDispatchToProps = dispatch => ({
//   getUserToken: () => dispatch(getUserToken()),
// });
export default connect(mapStateToProps, { getUserToken })(Splash);
