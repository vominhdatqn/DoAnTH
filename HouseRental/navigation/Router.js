import React from 'react';
import {
createStackNavigator,
createAppContainer,
createMaterialTopTabNavigator,
createSwitchNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/main/home/index';
import Transplants from '../screen/main/transplants';
import Nearby from '../screen/main/nearby';
import Message from '../screen/main/message';
import SignIn from '../screen/auth/signin';
import SignUp from '../screen/auth/signup';
import Profile from '../screen/main/profile';
import Splash from '../screen/splash';
import PostLocation from '../screen/main/postNews/PostLocation';
import PostInfo from '../screen/main/postNews/PostInfo';
import PostUtility from '../screen/main/postNews/PostUtility';
import PostConfirm from '../screen/main/postNews/PostConfirm';
import Search from '../screen/main/search';
import DetailHouse from '../screen/main/detailHouse';
import Trend from '../screen/main/trend';
import List from '../screen/ui/List';
import Article from '../screen/ui/Articlel';
import EditProfile from '../screen/main/editProfile';
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
      },
      Trend:{
        screen:Trend,
        navigationOptions:{
          header:null
        }
      },
      Search:{
        screen:Search,
        navigationOptions:{
          header:null
        }
      },
      PostLocation:{
        screen:PostLocation,
        navigationOptions:{
          header:null
        }
      },
      PostInfo:{
        screen:PostInfo,
        navigationOptions:{
          header:null
        }
      },
      PostUtility:{
        screen:PostUtility,
        navigationOptions:{
          header:null
        }
      },
      PostConfirm:{
        screen:PostConfirm,
        navigationOptions:{
          header:null
        }
      },
}) 
const HomeStack = createAppContainer(StackHome);

const StackAuth = createStackNavigator({

  SignIn:{
    screen:SignIn,
    navigationOptions:{
      header:null
    }
  },
  SignUp:{
    screen:SignUp,
    navigationOptions:{
      header:null
    }
  },


}) 
const AuthStack = createAppContainer(StackAuth);

const StackUI = createStackNavigator({
  Profile,
  EditProfile,
  Article,
},
{
  initialRouteName: 'Profile',
  defaultNavigationOptions: {
    header: null
    // headerStyle: {
    //   borderBottomColor: 'transparent',
    //   marginTop: 24,
    //   backgroundColor: 'green'
    // }
  }
}
);
const StrackProfile = createAppContainer(StackUI);

const NearbyUI = createStackNavigator({
 
  Nearby,
  DetailHouse,
},
{
  initialRouteName: 'Nearby',
  defaultNavigationOptions: {
    header: null
    // headerStyle: {
    //   borderBottomColor: 'transparent',
    //   marginTop: 24,
    //   backgroundColor: 'green'
    // }
  }
}
);
const StackNearby = createAppContainer(NearbyUI);


const TabBottom = createMaterialTopTabNavigator(
{
    Home:HomeStack,
    // Transplants:Transplants,
    Nearby:StackNearby,
    Message:Message,
    Profile:StrackProfile,
},{ 
    defaultNavigationOptions: ({navigation}) => ({  
        tabBarIcon: ({ focused, tintColor,horizontal }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `home-city${focused ? '' : '-outline'}`;
            // } else if (routeName === 'Transplants') {
            //   iconName = `account-group${focused ? '' : '-outline'}`;
            } else if (routeName === 'Nearby') {
              iconName = `google-nearby${focused ? '' : ''}`;
            } else if (routeName ==='Message'){
              iconName = `facebook-messenger${focused ? '' : ''}`;
            }else if (routeName ==='Profile'){
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
 const StackBottomApp = createAppContainer(TabBottom);

const AppNavigation = createSwitchNavigator({
  AuthLoading: Splash,
  Auth: AuthStack,
  Main: StackBottomApp
}, {
  initialRouteName: 'AuthLoading',
})

export default Root = createAppContainer(AppNavigation)
