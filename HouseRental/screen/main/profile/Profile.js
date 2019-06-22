import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getUserToken, removeUserToken } from '../../../redux/actionCreator';
import checkToken from '../../../api/checkToken';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../../component';
 class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: []
    }
  }
  componentDidMount() {
   this.LoadInitState();
  }
  

  LoadInitState = async () => {
    this.props.getUserToken()
    .then(() => {
        checkToken(this.props.token)
        .then(response => this.setState({ userName: response.user }))
        .catch(error => console.log(error))
    })
    .catch(error => {
      console.log(error)
    })
    
    
    
  }
  async logout() {
    this.props.removeUserToken()
    .then(() => this.props.navigation.navigate('Auth'));
  }
  render() {
    
    const { userName } = this.state;
    const uri = userName !== null ? 
    <Image style={styles.avatar} source={{uri: userName.avatar}}/> : 
    <Image style={styles.avatar} source={require('../../../assets/img/img-profile.jpg')}/>;
    <Image style={styles.avatar} source={{uri: userName.avatar}}/>
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image style={{height: '100%', width: '100%'}} resizeMode='cover' source={require('../../../assets/img/img-profile.jpg')}/>
          </View>
          {uri}
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={{ alignItems: 'center'}}>
              <Text style={styles.name}>{userName.username}</Text>
              </View>
              <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
                <Icon name="contact-phone" size={30} />
              <Text style={styles.info}>{userName.phone}</Text>
              </View>
              <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
              <Icon name="email" size={30} />
              <Text style={styles.info}>{userName.email}</Text>
              </View>
              <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
              <Icon name="location-city" size={30} />
              <Text style={styles.info}>{userName.address}</Text>
              </View>
              <Button onPress={() => this.logout()}>
                  Log Out 
              </Button>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
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
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    marginHorizontal: 10,
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
    alignItems: 'center',
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
});

export default connect(mapStateToProps, { getUserToken, removeUserToken })(Profile);