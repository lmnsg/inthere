/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import {StackNavigator} from 'react-navigation'

import Main from './src/views/Main'
import Chat from './src/views/Chat'


const App = StackNavigator({
	Main: {screen: Main},
	Chat: {screen: Chat}
})

AppRegistry.registerComponent('App', () => App);
