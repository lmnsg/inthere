import React, { Component } from 'react'
import {View, ReactPage, FlowPage, JestPage} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'

export default class home extends Component {
	render() {
		return (
			<TabView tabBarPosition="bottom">
				<View tabLabel="React" />
				<View tabLabel="Flow" />
				<View tabLabel="Jest" />
			</TabView>
		)
	}
}