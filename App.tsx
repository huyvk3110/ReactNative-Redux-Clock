/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar, Text,
} from 'react-native';
import { Provider } from "react-redux";
import Navigation from './src/natigation';
import store from './src/Store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </Provider>
  );
};