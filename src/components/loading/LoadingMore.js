import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../styles/colors';

export default function LoadingMore({state}){
	if(!state) return null;
	return (
		<View style={styles.container}>
			<Feather name="loader" color={Colors.DARKGRAY} size={20} />
			<Text style={styles.text}>Loading more...</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	text: {
		color: Colors.DARKGRAY,
		fontSize: 16,
		marginLeft: 10,
	},
});
