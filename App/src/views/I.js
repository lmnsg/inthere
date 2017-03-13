import React from 'react'
import {View, Text, FlowPage, JestPage} from 'react-native'
import {StackNavigator} from 'react-navigation'



export default class I extends React.Component {
	render() {
		return (
			<View>
				<Text>111</Text>
			</View>
		)
	}
}

 StackNavigator({
	I: {screen: I}
})