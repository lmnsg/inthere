import React from 'react'
import {View, Text, FlowPage, JestPage} from 'react-native'


export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Text onPress={() => this.props.navigation.navigate('Home')}>111</Text>
			</View>
		)
	}
}
