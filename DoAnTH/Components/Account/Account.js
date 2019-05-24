import React, { Component } from 'react';
import { Text, Alert, AsyncStorage,ScrollView,View,Image,TextInput,SafeAreaView,KeyboardAvoidingView,Keyboard,TouchableOpacity,StatusBar,Platform,TouchableWithoutFeedback } from 'react-native';
import styles from '../StyleComponent/StyleAccount';
import Loader from '../Loader';
import logo from '../../images/fba.png';
import Icon from 'react-native-vector-icons/Ionicons';
import signIn from '../../api/signIn';
export default class Account extends Component {
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
       const {email,password} = this.state;
       signIn(email,password)
      .then((responseJson) => {
        //   this.setState({checkLogin:responseJson.success});
        //   if(this.state.checkLogin ==2){
        //    Alert.alert("Thông báo!","Bạn nhập thông tin email và password!");
        //   }
        //   else if(this.state.checkLogin ==1){
        //          Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
        //   }
        //   else{
        //       Alert.alert("Thông báo!","Bạn đã đăng nhập không thành công!");
        //   }
          if(responseJson.success){
            var user = responseJson.token;
            Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
            console.log(user);
            AsyncStorage.setItem('token',user);
            this.props.navigation.navigate('Main')
        }
        else {
            Alert.alert("Thông báo!","Bạn đã đăng nhập không thành công!");
        }
      })
      .catch((error) =>{
          console.error(error);
      });
    },2000);
};
  render() {
    const {container,logoContainer,logoStyle,titleText,infoContainer,input,ColorTextSocial,
        inputIcon,viewInput,btnEye,btnLogin,titleLogin,buttonFB,buttonGG,Rows,ViewSocial} = styles;
    const {showPass,press,email,password,loadingVisible} = this.state;
        return (
            
           
           
          <SafeAreaView style={container}>
            <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null}
             
             style={{ flex: 1 }}>
                <StatusBar barStyle='light-content' />
               
                <View style={container}>
                
               
                        <View style={logoContainer}>
                            <Image source={logo} style={logoStyle} />
                            <Text style={titleText}>Account Information</Text>
                        </View>
                        <View style={infoContainer}>
                            <View style={viewInput}>
                                    <Icon name={'ios-person'} size={26} color={'rgb(38,50,56)'} style={inputIcon}/>
                                    <TextInput 
                                        style={input}
                                        value={email}
                                        onChangeText={email => this.setState({ email: email })}
                                        placeholder={'Email'}
                                        placeholderTextColor={'#9b9b9b'}
                                        underlineColorAndroid='transparent'
                                        keyboardType='email-address'
                                    />
                            </View>
                            <View style={viewInput}>
                                    <Icon name={'ios-lock'} size={26} color={'rgb(38,50,56)'} style={inputIcon}/>
                                    <TextInput 
                                        style={input}
                                            value={password}
                                            onChangeText={password => this.setState({ password: password })}
                                            placeholder={'Password'}
                                            secureTextEntry={showPass}
                                            placeholderTextColor={'#9b9b9b'}
                                            underlineColorAndroid='transparent'
                                    />
                                    <TouchableOpacity style={btnEye} onPress={()=>this.Click()}>
                                        <Icon name={press ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgb(38,50,56)'} />
                                    </TouchableOpacity>
                            </View>
                            <View style={viewInput}>
                                <TouchableOpacity style={btnLogin} onPress={()=>this.handleNextButton()}>
                                    <Text style={titleLogin}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                           
                            <View style={{flex:1}}>
                                  <View style={logoContainer}>
                                      <Text style={{fontSize:18}}>Use Without Sign In</Text>
                                  </View>
                                  <View style={{flex:1}}>
                                      <View style={Rows}> 
                                        <View style={{flex:1}}>
                                        <TouchableOpacity style={buttonFB}>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={logoContainer}>
                                                    <Icon name={'logo-facebook'} size={27} color={'white'} />
                                                </View>
                                        <View style={ViewSocial}>
                                        <Text style={ColorTextSocial}>Facebook</Text>
</View>
                                        </View>
                                        </TouchableOpacity>
                                      </View>
                                      <View style={{flex:1}}>
                                        <TouchableOpacity style={buttonGG}>
                                        <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={logoContainer}>
                                        <Icon name={'logo-google'} size={24} color={'white'} />
                                        </View>
                                        <View style={ViewSocial}>
                                        <Text style={ColorTextSocial}>Google</Text>
</View>
                                        </View>
                                        </TouchableOpacity>
                                      </View>
                                     
                                    </View>   
                                    
                                  </View>
                                 
                            </View>
                           
                        </View>
                       
                    </View>
                 
                    <Loader
                        modalVisible={loadingVisible}
                        animationType="fade"
                    />
                   
                   </KeyboardAvoidingView> 
                   </ScrollView>
            </SafeAreaView>
            
        )
  }
}



