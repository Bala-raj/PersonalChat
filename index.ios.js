/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/app';
import configureStore from './src/setup/configureStore';
import rootSaga from './src/setup/root-saga';


const store = configureStore();
store.runSaga(rootSaga);

export default class PersonalChat extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PersonalChat', () => PersonalChat);
