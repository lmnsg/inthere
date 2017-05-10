import React from 'react'
import {
	View,
	Text, ListView,
	requireNativeComponent
} from 'react-native'

const Amap = requireNativeComponent('RCTAMapView', Home)

export default class Home extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View>
				<Amap style={{width: 1}}/>
			</View>
		)
	}
}
