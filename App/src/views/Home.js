import React from 'react'
import {
	View,
	Text, ListView,
	FlowPage, JestPage, requireNativeComponent
} from 'react-native'

const Amap = requireNativeComponent('RCTAMapView', Home)

export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Amap style={{width: 1}}/>
			</View>
		)
	}
}
