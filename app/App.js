/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{Provider} from 'react-redux';
import {Root} from 'native-base'

 import store from './store';
 import Routes from './Routes';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </Root>
    );
  }
}


