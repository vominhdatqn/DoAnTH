import { StyleSheet,Dimensions } from 'react-native';
import {COLOR_ORANGE,COLOR_PURPLE,COLOR_GREEN,COLOR_BLUE,COLOR_WHITE} from './StylesColor';
const {width} = Dimensions.get('window');
module.exports = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    logoStyle:{
        width:120,
        height:120
    },
    titleText:{
        color:COLOR_BLUE,
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        opacity:0.9
    },
    infoContainer:{
        left:0,
        right:0,
        bottom:0,
        flex:3,
    },
    viewInput:{
        marginTop:20,
    },
    input:{
        height:45,
        width:width -55,
        borderRadius:4,
        borderColor:'gray',
        borderWidth:1,
        fontSize:16,
        paddingLeft:45,
        color:'#000000',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top:8,
        left:37,
    },
    btnEye:{
        position:'absolute',
        top:8,
        right:45
    },
    btnLogin:{
        backgroundColor:COLOR_BLUE,
        paddingVertical:15,
        marginHorizontal:25,
        borderRadius:8,
    },
    titleLogin:{
        color:COLOR_WHITE,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonFB:{
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
            margin: 22,
            height:'90%',
            justifyContent:'center',backgroundColor:'#3b5998'
    },
    buttonGG:{
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
        margin: 22,
        height:'90%',
        justifyContent:'center',backgroundColor:'#dd4b39'
    },
    Rows:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    ViewSocial:{
        flex:3,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    ColorTextSocial:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
  })