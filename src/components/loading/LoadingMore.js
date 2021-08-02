import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Colors from '../../styles/colors';

export default function LoadingMore(){
	return (
		<View style={styles.container}>
			<ActivityIndicator size="small" color={Colors.SECONDARY} />
			<Text style={styles.text}>Carregando...</Text>
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
