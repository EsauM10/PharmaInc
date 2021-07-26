import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../styles/colors';
import Button from '../components/button/Button';
import Form from '../components/form/Form';



export default function UserScreen({user, onPress}){
	const icon = <Ionicons name="close" color={Colors.PRIMARY} size={25} />

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.image} source={{uri: user.picture.large}}/>
			</View>
				
			<View style={styles.content}>

				<View style={styles.separator}>
					<Button icon={icon} color="#fff"  onPress={onPress}/>
				</View>
				<Form user={user} />

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	header: {
		backgroundColor: Colors.PRIMARY,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 100,
		paddingTop: 100,
	},

	content: {
		flex: 1,
	},

	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},

	name: {
		color: Colors.GRAY,
		fontWeight: 'bold',
		fontSize: 22,
	},

	separator: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'flex-end',
		padding: 10,
	},

});