import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SwipeableListView from 'SwipeableListView';
import SwipeableQuickActions from 'SwipeableQuickActions'
import SwipeableQuickActionButton from 'SwipeableQuickActionButton'

import ChatRow, { rowStyle } from './components/ChatRow'

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
		id: 2,
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

export default class Chats extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			dataSource: ds.cloneWithRowsAndSections(rows)
		}
	}

	goChat() {

	}

	_removeItem(id) {
		delete rows[id]
		this.setState({ dataSource: ds.cloneWithRowsAndSections(rows) })
	}

	_touchChatRow() {
		this.setState({ dataSource: ds.cloneWithRowsAndSections(rows) })
	}

	_renderActions(sectionId) {
		return (
			<SwipeableQuickActions style={styles.rowActions}>
				<SwipeableQuickActionButton imageSource={{}} text={"❌"}
				                            style={{width: 50, marginTop: 10}}
				                            textStyle={{textAlign: 'center', lineHeight: 50}}
				                            onPress={() => this._removeItem(sectionId)}
				/>
			</SwipeableQuickActions>
		)
	}

	render() {
		return (
			<SwipeableListView
				style={styles.container}
				maxSwipeDistance={50}
				dataSource={this.state.dataSource}
				renderQuickActions={(rowData, sectionId) => this._renderActions(sectionId)}
				renderRow={(row) => <ChatRow onClick={() => this._touchChatRow()} row={row}></ChatRow>}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	deleteButton: {
		width: 50,
		height: 50,
		color: 'red',
		textAlign: 'center',
		lineHeight: 50
	}
})
