/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import Main from './src/views/Main'
import {StackNavigator} from 'react-navigation'

const App = StackNavigator({
	Main: {screen: Main}
})

AppRegistry.registerComponent('there', () => App);
