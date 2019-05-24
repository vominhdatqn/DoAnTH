import Home from '../Components/Home/Home';
import Transplants from '../Components/Transplants.js';
import Nearby from '../Components/Nearby.js';
import Message from '../Components/Message.js';
import Account from '../Components/Account/Account';
import Register from '../Components/Account/Register';
import Profile from '../Components/Profile';
import Splash from '../Components/Splash'
import {createStackNavigator,createAppContainer,createMaterialTopTabNavigator,createSwitchNavigator} from 'react-navigation';
import React from 'react';
import DetailHouse from '../Components/DetailHouse/DetailHouse'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const StackHome = createStackNavigator({
      Home:{
        screen:Home,
        navigationOptions:{
          header:null
        }
      },
      
      DetailHouse:{
        screen:DetailHouse,
        navigationOptions:{
          header:null
        }
      }

}) 
let HomeStack = createAppContainer(StackHome);

const StackAuth = createStackNavigator({
  Register:{
    screen:Register,
    navigationOptions:{
      header:null
    }
  },
  // HomeSearch:{
  //   screen:HomeSearch,
  //   navigationOptions:{
  //     header:null
  //   }
  // },
  Account:{
    screen:Account,
    navigationOptions:{
      header:null
    }
  }

}) 
let AuthStack = createAppContainer(StackAuth);

const TabBottom = createMaterialTopTabNavigator(
{
    Home:HomeStack,
    Transplants:Transplants,
    Nearby:Nearby,
    Message:Message,
    Account:Profile,
},{ 
    defaultNavigationOptions: ({navigation}) => ({  
        tabBarIcon: ({ focused, tintColor,horizontal }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `home-city${focused ? '' : '-outline'}`;
            } else if (routeName === 'Transplants') {
              iconName = `account-group${focused ? '' : '-outline'}`;
            } else if (routeName === 'Nearby') {
              iconName = `google-nearby${focused ? '' : ''}`;
            } else if (routeName ==='Message'){
              iconName = `facebook-messenger${focused ? '' : ''}`;
            }else if (routeName ==='Account'){
                iconName = `account-card-details${focused ? '' : ''}`;
              }
             return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
       // tabBarLabel: 'Trang Chủ'.toLowerCase(),
       tabBarOptions: {
        activeTintColor: '#ffffff',
        indicatorStyle: {
          height: '100%',
          backgroundColor: '#089cfb'
        },
        // inactiveTintColor: '#ffffff',
        showIcon: true,
        showlabel: true,
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 10,
          margin: 0,
          padding: 0,
        },

        style: {
          backgroundColor: '#004C7E',
        },
      },
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      animationEnabled: false,
            });
 const  StackBottomApp = createAppContainer(TabBottom);

const AppNavigation = createSwitchNavigator({
  AuthLoading: Splash,
  Auth: AuthStack,
  Main: StackBottomApp
}, {
  initialRouteName: 'AuthLoading',
})

export default Root = createAppContainer(AppNavigation)
