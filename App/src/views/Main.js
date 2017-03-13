import React from 'react'

import Home from '../views/Home'
import Chat from '../views/Chat'
import I from '../views/I'
import tabBar from '../components/TabBar'

const tabs = {
	Home: {
		screen: Home,
		title: '首页',
		icon: {
			name: 'ios-home-outline',
			hover: 'ios-home',
			size: 20
		}
	},
	Chat: {
		screen: Chat,
		title: '消息',
		icon: {
			name: 'ios-chatbubbles-outline',
			hover: 'ios-chatbubbles',
			size: 20
		}
	},
	I: {
		screen: I,
		title: '我',
		icon: {
			name: 'ios-person-outline',
			hover: 'ios-person',
			size: 20
		}
	},
}

const tabBarOptions = {
	showLabel: false
}

export default tabBar(tabs, {tabBarOptions})

