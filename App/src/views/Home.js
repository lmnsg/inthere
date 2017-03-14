import React from 'react'
import {View, Text, FlowPage, JestPage, requireNativeComponent} from 'react-native'

const Amap = requireNativeComponent('RCTAMapView', Home)

export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Amap />
			</View>
		)
	}
}
