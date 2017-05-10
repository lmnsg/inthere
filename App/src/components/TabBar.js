import React from 'react'
import { TabNavigator } from 'react-navigation'
import { View, Text, FlowPage, JestPage } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const creater = (tabs, options, styles = {}) => {
	const router = {}
	Object.entries(tabs).forEach(([name, tab]) => {
		const { screen, icon } = tab
		router[name] = {
			screen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => <Icon
					size={icon.size}
					color={!focused ? icon.color : icon.hoverColor}
					name={!focused ? icon.name : icon.hover}></Icon>
			}
		}
	})

	return TabNavigator(router, {
		...options
	});
}
export default creater

