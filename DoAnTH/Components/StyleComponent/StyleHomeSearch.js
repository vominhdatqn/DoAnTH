import { StyleSheet,Dimensions } from 'react-native';
import {COLOR_ORANGE,COLOR_PURPLE,COLOR_GREEN,COLOR_BLUE} from './StylesColor';
const {width,height} = Dimensions.get('window');
module.exports = StyleSheet.create({
    container:{
      width:width*0.94,
      height:height*0.25,
      marginLeft:12,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 6,
      borderWidth:1,
      borderRadius:12,
      backgroundColor:'white',
      borderColor:'#ece6e6',
      marginTop:12
        
    },
    search:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#e8ecee',
      borderWidth:1,
      borderRadius:12,   
      borderColor:'#ece6e6',
      margin:13
    },
    iconSearch:{
      flex:3,
      backgroundColor:'#e8ecee',
      borderTopWidth:1,
      borderColor:'#ece6e6',
      borderBottomLeftRadius:12,
      borderBottomRightRadius:12
    },
    rows:{
      flex:1,
      flexDirection:'row'
     
    },
    columms:{
      flex:1,
      flexDirection:'column'
    },
    icons:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    },
    titleIcons:{
      flex:1,
      alignItems:'center'
    },
    Icon1:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_ORANGE
    },
    Icon2:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_PURPLE
    },
    Icon3:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_GREEN
    },
    Icon4:{
      width:40,
      height:40,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLOR_BLUE
    },
    titleText:{
      fontSize:12,
      fontFamily:'Cochin',
      color:'#333333',
      textAlign:'center'
    },
    titleTextPink:{
      fontSize:12,
      fontWeight:'400',
      fontFamily:'Cochin',
      color:"#e91e63"
    }
})