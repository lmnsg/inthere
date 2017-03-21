import React from 'react'
import {View, Text, Image, ListView, StyleSheet, TouchableOpacity} from 'react-native'

export default class ChatRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {user, message} = this.props.row
		return (
		<TouchableOpacity onPress={this.props.onClick}><View style={styles.row}>
				<Image style={styles.avatar} source={{uri: user.avatar}} />
				<View style={styles.contentSide}>
					<View style={styles.contentSideTop}>
						<Text style={styles.name}>{user.name}</Text>
						<Text style={styles.time}>{message.time}</Text>
					</View>

					<Text numberOfLines={1} style={styles.message}>{message.content}</Text>
				</View>
			</View>
		</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		marginLeft: 20,
		paddingBottom: 10,
		paddingTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	avatar: {
		marginRight: 10,
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	contentSide: {
		marginRight: 10,
		flex: 1,
		justifyContent: 'center'
	},
	contentSideTop: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	name: {
		color: '#000',
		fontSize: 16,
		fontWeight: '400'
	},
	time: {
		fontSize: 12,
		color: '#666'
	},
	message: {
		marginTop: 5,
		fontSize: 12,
		color: '#666'
	}
})