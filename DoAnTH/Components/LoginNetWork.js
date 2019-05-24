import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper';
const {width,height} = Dimensions.get('window');

export default class Account extends Component {
  render() {
     
    return (
        <View style={styles.content}>
          <View style={styles.wrapper}>
                <Swiper  showsButtons={false} autoplay={true}>
                    <View style={styles.slide1}>
                    <Image style={{height:'100%',width:'100%'}}
                    source={require('./img/img1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                    <Image style={{height:'100%',width:'100%'}}
                    source={require('./img/img2.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                    <Image style={{height:'100%',width:'100%'}}
                    source={require('./img/img3.jpg')}/>
                    </View>
                </Swiper>
         </View>
            <View style={styles.login}>
                    <View style={styles.stylebuttonlogin}>
                    <TouchableOpacity style={styles.styleDangnhap} >
                        <Text style={{  textAlign:'center',color:'white',fontWeight:'bold',fontSize:20}} >Đăng nhập</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.stylelogin}>
                         <View style={{flex:1,flexDirection:'row'}}> 
                                 <View style={styles.stylegoogle}>
                                 <TouchableOpacity style={styles.styletouch}>
                                 <Text style={{color:'red',fontSize:20,fontWeight:'bold',textAlign:'center'}}>G</Text>
                                 </TouchableOpacity>
                                </View>
                                <View style={styles.stylegoogle}>
                                <TouchableOpacity style={styles.styletouch}>
                                <Text  style={{color:'blue',fontSize:24,fontWeight:'900',textAlign:'center',padding:5}}>f</Text>
                                </TouchableOpacity>
                                </View>
                          </View>
                    </View>                        
            </View>
            </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
        content:{
            flex:1
        },
        wrapper: {
            flex:6,
        },
        login:{
            flex:3,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            marginTop:10
        },
        stylebuttonlogin:{
            flex:1,
            textAlign:'center',
            fontSize:20,
            marginTop:10
        },
        stylelogin:{
            flex:3,
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
        styleDangnhap:{
            backgroundColor:'pink',
            borderRadius:10,
            width:200,
            height:'100%',
            shadowOpacity:0.09,
            shadowRadius:0.05,
            shadowColor:'#000',
            borderColor:'#ddd',
            borderWidth: 0.3,
            borderBottomWidth: 0,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 0.5,
            marginLeft: 13,
        },
        stylegoogle:{
            flex:1,
        },
        styletouch:{
            borderRadius:10,
            shadowOpacity:0.09,
            shadowRadius:0.05,
            shadowColor:'#000',
            borderColor:'#ddd',
            borderWidth: 0.3,
            borderBottomWidth: 0,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 0.5,
            marginLeft: 13,
            width:'80%',
            height:'50%',
            justifyContent:'center'
        },
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        slide2: {
            flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        text: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }
    })
    
                