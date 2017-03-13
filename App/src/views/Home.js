import React from 'react'
import {View, Text, FlowPage, JestPage, requireNativeComponent} from 'react-native'

const Amap = requireNativeComponent('RCTAmp', Home)

export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Text onPress={() => this.props.navigation.navigate('Home')}>111</Text>
				<Amap />
			</View>
		)
	}
}
