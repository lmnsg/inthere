import React from 'react'
import {View, Text, SwipeableListView, TouchableOpacity, TouchableHighlight, StyleSheet} from 'react-native'
import ChatRow from './components/ChatRow'

const rows = {
	0: [{
		id: 1,
		user: {
			id: '',
			name: '艾克',
			avatar: 'https://avatars3.githubusercontent.com/u/10400425?v=3&s=460'
		},
		message: {
			time: '上午5:30',
			content: '蛤蛤蛤蛤蛤， Let me f**k F**k'
		}
	}],
	1: [{
		id: '',
		user: {
			id: '',
			name: '艾克',
			avatar: 'https://aos-cdn-image.amap.com/pp/avatar/382/bc/a8/46254869.jpeg?ver=1462197073&imgoss=1'
		},
		message: {
			time: '上午5:30',
			content: 'https://aos-cdn-image.amap.com/pp/avatar/382/bc/a8/46254869.jpeg?ver=1462197073&imgoss=1https://aos-cdn-image.amap.com/pp/avatar/382/bc/a8/46254869.jpeg?ver=1462197073&imgoss=1'
		}
	}]
}
const ds = SwipeableListView.getNewDataSource()

export default class Chat extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			dataSource: ds.cloneWithRowsAndSections(rows)
		}
	}

	goChat() {

	}

	_touchChatRow() {
		delete rows[0]
		this.setState({dataSource: ds.cloneWithRowsAndSections(rows)})
	}

	render() {
		return (
			<SwipeableListView
				style={styles.container}
				maxSwipeDistance={100}
				bounceFirstRowOnMount={true}
				dataSource={this.state.dataSource}
				renderQuickActions={(row) => <View style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}>
					<TouchableHighlight
						onPress={() => {
							alert(1)
						}}>
						<View style={{
							backgroundColor: 'red',
							flex: 1,
							alignItems: 'center',
							flexDirection: 'row',
							paddingHorizontal: 10
						}}>
							<Text style={{
								color: 'white',
								fontSize: 16
							}}>删除</Text>
						</View>
					</TouchableHighlight>
				</View>}
				renderRow={(row) => <ChatRow row={row} onClick={() => this._touchChatRow()}></ChatRow>}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	}
})