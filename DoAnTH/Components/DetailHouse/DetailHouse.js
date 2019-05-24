import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,TouchableOpacity,ScrollView,SafeAreaView,Platform,StatusBar,Image } from 'react-native'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
const screen = Dimensions.get('window');


const urlUser = "http://192.168.206.2:3001/api/userID";
const urlCate = "http://192.168.206.2:3001/api/cateID";
export default class detailHouse extends Component {
constructor(props){
    super(props);
    this.state = {
        cate_id:this.props.navigation.state.params.cate_id,
        cateHouse:[],
        userID:this.props.navigation.state.params.userID,
        user :[],
       
    }
}
componentWillMount(){
    this.startHeaderHeight = screen.width*0.15
    if(Platform.OS =='ios'){
        this.startHeaderHeight = screen.width*0.15 + StatusBar.currentHeight
    }
}
componentDidMount(){
    this.fetchCateHouse();
    this.fetchUserID();
   
}

fetchCateHouse = async () => {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cate_id:this.state.cate_id,
            })
        }
        const response = await fetch(urlCate, config);
        const json = await response.json();
        this.setState({
            cateHouse:json.CateHouse
          })
        
    } catch (error) {
        console.log(error)
    }

}

fetchUserID = async () => {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID:this.state.userID,
            })
        }
        const response = await fetch(urlUser, config);
        const json = await response.json();
        this.setState({
            user:json.user
          })
        
    } catch (error) {
        console.log(error)
    }

}

    render() {
        const {cateHouse,user} = this.state;
        const {textTitle,header,container,rowTitle,rowAddress,rowNote} = styles;
        const {houseName,images,rent_cost,area,Deposit,Street,guild,township,city,note} = this.props.navigation.state.params;
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#f8f8f8' }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: this.startHeaderHeight,
                        backgroundColor: '#004c7e',
                    }}>
                        <View style={header}>
                            
                            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                                <Icons name="arrow-left" size={25} color={"white"} />
                            </TouchableOpacity>


                            <Text style={[textTitle,{fontSize:20,color:'#ffffff'}]}>Chi tiết phòng</Text>


                            <Icons name="social-instagram" size={25} color={"white"} />

                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor:'#FFFEFE'}}
                    >
                        <View style={{ flex: 1, height: screen.height * 0.4}}>
                        <Image 
                        source={{uri:`${images}`}}
                        style={{height:"100%",width:"100%"}}
                        />
                        </View>
                        <View style={rowTitle}>
                            <View style={{ flex: 1 }}>
                                {cateHouse.map((cate,index)=> (
                                    <Text key={cate.cate_id} style={[textTitle,{ marginLeft: 15}]}>{cate.categoryName}</Text>
                                ))}
                                
                            </View>
                            <View style={{ flex: 2, }}>
                                <Text numberOfLines={1} style={[textTitle,{ marginLeft: 15,fontWeight:'bold',fontSize:20}]}>{houseName}</Text>
                            </View>
                            <View style={{ flex: 3, flexDirection: 'row',}}>
                                <View style={container}>
                                    <Text style={[textTitle,{fontSize:12}]}>GIÁ PHÒNG</Text>
                                    <Text style={[textTitle,{color:'#089cfb'}]}>{rent_cost} tr/ng</Text>
                                </View>
                                <View style={container}>
                                    <Text style={[textTitle,{fontSize:12}]}>DIỆN TÍCH</Text>
                                    <Text style={[textTitle,{color:'#089cfb'}]}>{area} m2</Text>
                                </View>
                                <View style={container}>
                                    <Text style={[textTitle,{fontSize:12}]}>ĐẶT CỌC</Text>
                                    <Text style={[textTitle,{color:'#089cfb'}]}>{Deposit} tháng</Text>
                                </View>
                            </View>
                        </View>
                        <View style={rowAddress}>
                            <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={[textTitle,{ marginLeft: 15,fontSize:16,fontWeight:'bold'}]}>Địa chỉ</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={[textTitle,{ marginLeft: 15,color:'#6f6f6f'}]}>{`${Street},Phường ${guild},Quận ${township},TP.${city}`}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                            {user.map(e=>(
                                
                                <Text key={e.userID} style={[textTitle,{ marginLeft: 15,fontSize:16,fontWeight:'bold'}]}>Điện thoại: {e.phone}</Text>
                            ))}
                            </View>
                            </View>
                        <View style={rowNote}>
                            <Text style={[textTitle,{ marginLeft: 15,fontSize:16,fontWeight:'bold'}]}>Chi tiết</Text>
                            <Text style={[textTitle,{ marginLeft: 15,color:'#7A7A7A'}]}>{note}</Text>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textTitle:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:"500",
        fontStyle:'normal',
        color:"#4a4a4a"
    },
    header:{
        flexDirection: 'row', 
        marginVertical: 16, 
        marginHorizontal: 5,
         justifyContent: 'space-between',
          alignItems: 'center' 
    },
    rowTitle:{
        flex: 1, 
        height: screen.height * 0.15,
        borderBottomColor:'#ece6e6',
        borderBottomWidth:1,
        backgroundColor:'#f8f8f8',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,    
    },
    rowAddress:{
        flex: 1,
        height: screen.height * 0.15,
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
        marginVertical: 10, shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: 'white',
        borderColor: '#ece6e6',
    },
    rowNote:{
        flex: 1,
        height: screen.height * 0.4,
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
        marginVertical: 10, shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: 'white',
        borderColor: '#ece6e6',
    }
})
