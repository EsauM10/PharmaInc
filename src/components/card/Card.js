import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../styles/colors';



export default function Card({user}){

	const getDate = (date) => {
		return new Date(date).toLocaleDateString('pt-BR');
	}

	return (
		<View style={styles.container}>    
			<Text style={styles.name}>{user.name.first} {user.name.last}</Text>
			<Text style={styles.text}>{user.location.country}</Text>
			
			<View style={styles.footer}>
				<Text style={styles.text}>{user.gender}</Text>
				<Text style={styles.text}>{getDate(user.dob.date)}</Text>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},

	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	name: {
		color: Colors.GRAY,
		fontWeight: 'bold',
		fontSize: 18,
	},

	text: {
		color: Colors.GRAY,
		fontSize: 15,
	},
});
