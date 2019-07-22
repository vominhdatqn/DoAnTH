// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import { connect } from 'react-redux';
// import { getUserToken, removeUserToken } from '../../../redux/actionCreator';
// import checkToken from '../../../api/checkToken';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Button } from '../../../component';
//  class Profile extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userName: []
//     }
//   }
//   componentDidMount() {
//    this.LoadInitState();
//   }


//   LoadInitState = async () => {
//     this.props.getUserToken()
//     .then(() => {
//         checkToken(this.props.token)
//         .then(response => this.setState({ userName: response.user }))
//         .catch(error => console.log(error))
//     })
//     .catch(error => {
//       console.log(error)
//     })



//   }
//   async logout() {
//     this.props.removeUserToken()
//     .then(() => this.props.navigation.navigate('Auth'));
//   }
//   render() {

//     const { userName } = this.state;
//     const uri = userName.avatar !== '' ? 
//     <Image style={styles.avatar} source={{uri: userName.avatar}}/> : 
//     <Image style={styles.avatar} source={require('../../../assets/img/avatar.jpg')}/>;
//     // <Image style={styles.avatar} source={{uri: userName.avatar}}/>
//     return (
//       <View style={styles.container}>
//           <View style={styles.header}>
//             <Image style={{height: '100%', width: '100%'}} resizeMode='cover' source={require('../../../assets/img/img-profile.jpg')}/>
//           </View>
//           {uri}
//           <View style={styles.body}>
//             <View style={styles.bodyContent}>
//               <View style={{ alignItems: 'center'}}>
//               <Text style={styles.name}>{userName.username}</Text>
//               </View>
//               <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
//                 <Icon name="contact-phone" size={30} />
//               <Text style={styles.info}>{userName.phone}</Text>
//               </View>
//               <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
//               <Icon name="email" size={30} />
//               <Text style={styles.info}>{userName.email}</Text>
//               </View>
//               <View style={{borderBottomColor: 'gray', borderBottomWidth:1, flexDirection: 'row'}}>
//               <Icon name="location-city" size={30} />
//               <Text style={styles.info}>{userName.address}</Text>
//               </View>
//               <Button onPress={() => this.logout()}>
//                   Log Out 
//               </Button>
//             </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header:{
//     height:200,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom:10,
//     alignSelf:'center',
//     position: 'absolute',
//     marginTop:130
//   },
//   name:{
//     fontSize:22,
//     color:"#FFFFFF",
//     fontWeight:'600',
//   },
//   body:{
//     marginTop:40,
//     flex: 1,
//   },
//   bodyContent: {
//     flex: 1,
//     marginHorizontal: 10,
//     padding:30,

//   },
//   name:{
//     fontSize:28,
//     color: "#696969",
//     fontWeight: "600"
//   },
//   info:{
//     fontSize:16,
//     color: "#00BFFF",
//     marginTop:10
//   },
//   description:{
//     fontSize:16,
//     color: "#696969",
//     marginTop:10,
//     textAlign: 'center'
//   },
//   buttonContainer: {
//     marginTop:10,
//     height:45,
//     flexDirection: 'row',
//     alignItems: 'center',
//     width:250,
//     borderRadius:30,
//     backgroundColor: "#00BFFF",
//   },
// });
// const mapStateToProps = (state) => ({
//   token: state.tokenReducer.token,
// });

// export default connect(mapStateToProps, { getUserToken, removeUserToken })(Profile);
import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground, FlatList, Image, Platform, Animated, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { connect } from 'react-redux';
import { getProfile, getUserToken, getListPost, removeUserToken } from '../../../redux/actionCreator';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
    paddingHorizontal: 36
  },
  destinations: {
  },
  destination: {
    width: width - (36 * 2),
    height: 150,
    paddingHorizontal: 36,
    marginRight: 2,
    paddingVertical: 24,
    borderRadius: 12,
  },
  destinationInfo: {
    position: 'absolute',
    padding: 18,
    bottom: 60,
    right: 36,
    left: 36,
    borderRadius: 12,
    backgroundColor: 'white',
    zIndex: 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: (Platform.OS === 'android') ? 7 : 0
  },
  recommended: {
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  rating: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  dots: {
    width: 12,
    height: 12,
    backgroundColor: '#DCE0E9',
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: 'transparent',
    marginHorizontal: 6,
  },
  activeDot: {
    borderColor: '#007BFA'
  }

})

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide()
    this.props.navigation.navigate('EditProfile')
  };

  showMenu = () => {
    this._menu.show();
  };
  scrollX = new Animated.Value(0)

  
  // renderDots() {
  //   const { destinations } = this.props;
  //   const dotPosition = Animated.divide(this.scrollX, width);
  //   return (
  //     <View style={[styles.flex, styles.row, { justifyContent: 'center', marginTop: 15 }]}>
  //       {destinations.map((item, index) => {
  //         const width = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 1],
  //           outputRange: [0, 3, 0],
  //           extrapolate: 'clamp'
  //         });
  //         return (
  //           <Animated.View
  //             key={`step-${item.id}`}
  //             style={[styles.dots, styles.activeDot, { borderWidth: width }]}
  //           />
  //         )
  //       })}

  //     </View>
  //   );
  // }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations, styles.articles, { flex: 2 }]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.profile}
          keyExtractor={(item, index) => `${item.userID}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          renderItem={({ item }) => this.renderDestination(item)}

        />
        {/* {this.renderDots()} */}
      </View>
    );
  }
  renderDestination = (item) => {
    const img = item.avatar !== '' ?
      (<Image source={{ uri: item.avatar }} style={styles.avatar} />)
      : (<Image source={require('../../../assets/img/avatar.jpg')} style={styles.avatar} />)
    return (
      <View tyle={[styles.flex, styles.shadow]}>
        <ImageBackground
          style={[styles.destination, { height: 230 }]}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: 'https://images.unsplash.com/photo-1561640266-d32d5bdc9cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80' }}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              {img}
            </View>
            <View style={[styles.column, { flex: 2, paddingLeft: 18 }]}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.username}</Text>
              <Text style={{ color: 'white' }}>{item.phone}</Text>
            </View>
            <View style={{ flex: 0, alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={styles.rating}>2019</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 8 }}>Email</Text>
          <Text style={{ color: 'gray' }}>{item.email}</Text>
        </View>
        <View style={[styles.flex, styles.row, { justifyContent: 'center', marginTop: 15 }]}>
          <View key={`step-${item.id}`} style={[styles.dots, item.id === 2 ? styles.activeDot : null]} />
        </View>

      </View>
    );
  }
  renderRecommended = ( add ) => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended, styles.articles, { marginVertical: 10}]}>
        <View style={[styles.row,{ flexWrap: 'wrap' }]}>
          <Text style={{ fontWeight: 'bold' }}>Address: </Text>
          <Text>{add}</Text>
        </View>
        <View style={styles.row}>
        <Text style={{ fontWeight: 'bold' }}>List posts: </Text>
        <Text onPress={() => this.props.navigation.navigate('Article')}>({
          this.props.listPost.length
        })</Text>
        </View>
       
      </View>

    );
  }
  

  componentDidMount() {
    this.LoadInitState();
    
    setTimeout( () => {
      if (typeof this.props.profile[0] === 'undefined') {
        console.log("undefined");
      } else {
        this.props.getListPost(this.props.profile[0].cate_userID);
      }
    }, 1500);
  }
  LoadInitState = async () => {
    this.props.getUserToken()
      .then(() => {
        this.props.getProfile(this.props.token)
      })
      .catch(error => {
        console.log(error)
      })

  }
  logOut = async () => {
    this._menu.hide();
    this.props.removeUserToken()
    .then(() => this.props.navigation.navigate('Auth'));
  }
  render() {
    const add = typeof this.props.profile[0] === 'undefined' ? console.log("profile undefined") : this.props.profile[0].address;
  console.log('prppop', this.props.profile[0]);
return (
  <View style={[styles.flex]}>
    <View style={[styles.row, styles.header, { backgroundColor: '#f8f8f8' }]}>
      <View>
        <Text>Search for place</Text>
        <Text style={{ fontSize: 24 }} onPress={this.logOut}>Profile</Text>
      </View>
      <View>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu} >
              {
                this.props.profile.map(item => (
                  (item.avatar !== '') ?
                  (<Image key={`id-${item.userID}`} source={{ uri: `${item.avatar}` }} style={styles.avatar} />)
                : (<Image source = { require('../../../assets/img/avatar.jpg') } style = {styles.avatar} />)
                )
                )
              }
            </TouchableOpacity>
          }
        >
          <MenuItem onPress={this.hideMenu}>Edit Profile</MenuItem>
          <MenuItem onPress={this.logOut}>Log Out</MenuItem>
        </Menu>
        <View style={{ width: 16, height: 16, position: 'absolute', borderRadius: 16, right: 3, bottom: -8, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: 'white' }}>
          <Text style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 10, }}> </Text>
        </View>
      </View>
    </View>
    {this.renderDestinations()}
    {this.renderRecommended(add)}
  </View>
)
  }
}

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
  profile: state.profileReducer.profile,
  listPost: state.listPostReducer.listPost,
});

export default connect(mapStateToProps, { getProfile, getUserToken, getListPost, removeUserToken })(Profile);