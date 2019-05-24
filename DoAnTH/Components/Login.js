import React, { Component } from 'react';
import { Text, StyleSheet,Alert, View,Image,TextInput,SafeAreaView,Keyboard,KeyboardAvoidingView,TouchableOpacity,StatusBar,Dimensions } from 'react-native';
import Loader from './Loader.js';
import logo from '../images/fba.png';
import Icon from 'react-native-vector-icons/Ionicons';
import signIn from '../api/signIn'
const {width,height} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            showPass:true,
            press:false,
            loadingVisible:false,
            checkLogin:0

        }
    }
    Click(){
        this.setState({
            showPass:!this.state.showPass,
            press:!this.state.press
        })
    };
    handleNextButton(){
        this.setState({
            loadingVisible:true
        });
        setTimeout(()=>{
           this.setState({
            loadingVisible:false
           }); 
          

        //    alert("successfully");
        },2000);
    };
    onLogin(){
        const {email,password} = this.state;
            signIn(email,password)
           .then((responseJson) => {
               this.setState({checkLogin:responseJson.success});
               if(this.state.checkLogin ==2){
                Alert.alert("Thông báo!","Bạn nhập thông tin email và password!");
                //    Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
               }
               else if(this.state.checkLogin ==1){
                      Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
               }
               else{
                   Alert.alert("Thông báo!","Bạn đã đăng nhập không thành công!");
               }
           })
           .catch((error) =>{
               console.error(error);
           });
    }
  render() {
      const {container,logoContainer,logoStyle,titleText,infoContainer,input,inputIcon,viewInput,btnEye,btnLogin,titleLogin} = styles;
      const {showPass,press,email,password} = this.state;
    return (
        <SafeAreaView style={container}>
            <StatusBar barStyle='light-content' />
            <KeyboardAvoidingView behavior style={container}>
                <View style={container}>
                    <View style={logoContainer}>
                        <Image source={logo} style={logoStyle} />
                        <Text style={titleText}>Account Information</Text>
                    </View>
                    <View style={infoContainer}>
                        <View style={viewInput}>
                            <Icon name={'ios-person'} size={26} color={'rgba(255,255,255,0.7)'} style={inputIcon} />
                            <TextInput
                                style={input}
                                value={email}
                                onChangeText={email => this.setState({ email: email })}
                                placeholder={'Username'}
                                placeholderTextColor={'rgba(255,255,255,0.7)'}
                                underlineColorAndroid='transparent'
                                keyboardType='email-address'
                            />
                        </View>
                        <View style={viewInput}>
                            <Icon name={'ios-lock'} size={26} color={'rgba(255,255,255,0.7)'} style={inputIcon} />
                            <TextInput
                                style={input}
                                value={password}
                                onChangeText={password => this.setState({ password: password })}
                                placeholder={'Password'}
                                secureTextEntry={showPass}
                                placeholderTextColor={'rgba(255,255,255,0.7)'}
                                underlineColorAndroid='transparent'
                            />
                            <TouchableOpacity style={btnEye} onPress={() => this.Click()}>
                                <Icon name={press ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'} />
                            </TouchableOpacity>
                        </View>
                        <View style={viewInput}>
                            <TouchableOpacity style={btnLogin} onPress={() => this.onLogin()}>
                                <Text style={titleLogin}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Loader
                    modalVisible={this.state.loadingVisible}
                    animationType="fade"
                />
            </KeyboardAvoidingView>

        </SafeAreaView>
       
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(32,53,70)',
       
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1

    },
    logoStyle:{
        width:120,
        height:120
    },
    titleText:{
        color:'#f7c744',
        fontSize:18,
       
        textAlign:'center',
        marginTop:10,
        opacity:0.9
    },
    infoContainer:{
       
        left:0,
        right:0,
        bottom:0,
        flex:0.5,
       
       
    },
    viewInput:{
        marginTop:10,
       
    },
    input:{
        height:45,
        width:width -55,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'rgba(255,255,255,0.7)',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top:8,
        left:37
    },
    btnEye:{
        position:'absolute',
        top:8,
        right:45
    },
    btnLogin:{
        backgroundColor:'#f7c744',
        paddingVertical:15,
        marginHorizontal:25,
        borderRadius:8,
        
    },
    titleLogin:{
        color:'rgb(32,53,70)',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    }

})
