import React, { Component } from 'react'
import { ImageBackground, StyleSheet ,Image,View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'

const url = "http://192.168.206.2:3001/api/register";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            email:'',
            borderColor: 'rgba(111, 111, 111, 0.2)',
            borderColor2: 'rgba(111, 111, 111, 0.2)',
            borderColor3: 'rgba(111, 111, 111, 0.2)'
        }
    }
    handleFocus = () => this.setState({borderColor: '#004c7e'})

    handleBlur = () => this.setState({borderColor: 'rgba(111, 111, 111, 0.2)'})

    handleFocus2 = () => this.setState({borderColor2: '#004c7e'})

    handleBlur2 = () => this.setState({borderColor2: 'rgba(111, 111, 111, 0.2)'})

    handleFocus3 = () => this.setState({borderColor3: '#004c7e'})

    handleBlur3 = () => this.setState({borderColor3: 'rgba(111, 111, 111, 0.2)'})
  
    registerUser = async () =>{
         const {username,password,email} = this.state;
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    email
                })
            }
            const response = await fetch(url, config);
            const json = await response.json();
            console.log(json)
            if(json.code===500){
                   Alert.alert("Thông báo!","Bạn nhập thông tin email và password!");
            }
            else if(json.code===200){
                    Alert.alert("Thông báo!","Bạn đã đăng ký thành công!",[
                        {
                            text: 'Cancel',
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => this.props.navigation.navigate("Account")},
                    ]);
            }else{
                Alert.alert("Thông báo!","Bạn đã đăng nhập thất bại!");
            }
            
        } catch (error) {
            console.log(error)
        }
    }



  render() {
      const {container,header,logo,body,footer,titleText,input,button} = styles;
      const {borderColor,borderColor2,borderColor3,username,password,email} = this.state;
     
    return (
        
            <ImageBackground  style={container} source={require('../../images/bitmap.png')}  > 
                <View style={header}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={logo}
                    />
                </View>
                <View style={body}>
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={titleText}>Name *</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                value={username}
                                onChangeText={username => this.setState({username})}
                                 style={[input, { borderColor:borderColor }]}
                                 onFocus={this.handleFocus}
                                 onBlur={this.handleBlur}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                            <Text style={titleText}>Email *</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        <TextInput
                            value={email}
                            onChangeText={email => this.setState({email})}
                            style={[input, { borderColor:borderColor2}]}
                            onFocus={this.handleFocus2}
                            onBlur={this.handleBlur2}
                        />
                        </View>
                    </View>
                    <View style={{ flex: 1, marginBottom: 10 }}>
                    <View style={{ flex: 1 }}>
                            <Text style={titleText}>Password *</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                value={password}
                                onChangeText={password => this.setState({password})}
                               style={[input, { borderColor:borderColor3}]}
                               onFocus={this.handleFocus3}
                               onBlur={this.handleBlur3}
                            />
                        </View>
                    </View>
                    <View style={container}>
                        <TouchableOpacity style={button} onPress={this.registerUser}>
                            <Text style={[titleText, { color: '#ffffff' }]}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={[titleText,{color:'#757575'}]}> I agree to all </Text>
                        <Text style={[titleText,{color:'#089cfb'}]}>Terms &amp; Conditions</Text>
                    </View>
                </View>
                <View style={footer}>
                    <Text style={[titleText,{color:'#a4a4a4'}]}>User Agreement  |  Privacy Policy</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(48, 51, 58, 0.1)',
        width: 330,
    },
    logo: {
        width: 191,
        height: 30
    },
    titleText: {
        color: '#b3b3b3',
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textAlign: 'left'
    },
    input: {
        width: 263,
        height: 46,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(111, 111, 111, 0.2)'
    },
    button: {
        backgroundColor: '#1a629a',
        width: 240,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
    }

})

