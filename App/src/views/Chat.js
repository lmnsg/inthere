import React from 'react'
import {View, Text, ListView, StyleSheet} from 'react-native'
import ChatRow from './components/ChatRow'

export default class Chat extends React.Component {
	constructor(props) {
		super(props)
		const ds = new ListView.DataSource({rowHasChanged: () => {}})
		this.state = {
			dataSource: ds.cloneWithRows([
				{
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
				}, {
					id: '',
					user: {
						id: '',
						name: '艾克',
						avatar: 'https://aos-cdn-image.amap.com/pp/avatar/382/bc/a8/46254869.jpeg?ver=1462197073&imgoss=1'
					},
					message: {
						time: '上午5:30',
						content: '蛤蛤蛤蛤蛤， Let me f**k F**k'
					}
				}
			])
		}
	}

	render() {
		return (
			<ListView
				style={styles.container}
				dataSource={this.state.dataSource}
				renderRow={(row) => <ChatRow row={row}></ChatRow>}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	}
})