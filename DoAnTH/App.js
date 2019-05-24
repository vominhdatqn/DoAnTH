/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Splash from './Components/Splash.js';
import Root from './Navigation/Navigation.js';
import {Provider} from 'react-redux';
import store from './redux/store';
export default class App extends Component {

  render() {
 
    return (
      <Provider store={store}>
        <Root />
      </Provider>

    );
  }
}

