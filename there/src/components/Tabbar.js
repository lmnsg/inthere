import React from 'react'
import TabView from 'react-native-scrollable-tab-view'
import {
	StyleSheet,
	View,
	Text,
	ReactPage,
	FlowPage,
	JestPage,
	TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Tabbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			myTabs: [
				{
					text: '首页',
					icon: 'ios-home-outline'
				},
				{
					text: '消息',
					icon: 'ios-chatbubbles-outline'
				},
				{
					text: '我',
					icon: 'ios-person-outline'
				}
			]
		}
	}

	render() {
		console.log(this.state.tabs);
		return (
			<TabView
				tabBarPosition="bottom"
				renderTabBar={() => <MyTabBar myTabs={this.state.myTabs} />}
			>
				<View />
				<View />
				<View />
			</TabView>
		)
	}
}

class MyTabBar extends React.Component {
	renderTab = (tab, i) => {
		let color = this.props.activeTab == i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色

		return (
			<TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
				<View style={styles.tabItem}>
					<Icon
						name={tab.icon}  // 图标
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{tab.text}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		console.log(this.props);
		return (
			<View style={styles.tabs}>
				{this.props.myTabs.map(this.renderTab)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});
