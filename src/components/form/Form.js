import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import TextField from '../field/TextField';


export default function Form({user, editable=false}){
	const location = `${user.location.street.name}, ${user.location.city}, ${user.location.state}`
	const date = new Date(user.dob.date).toLocaleDateString('pt-BR');
	
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{user.name.first} {user.name.last}</Text>
			<ScrollView style={styles.scroll}>
				<TextField label="Email" value={user.email} editable={editable}/>
				<TextField label="Gênero" value={user.gender} editable={editable}/>
				<TextField label="Data de Nascimento" value={date} editable={editable}/>
				<TextField label="Telefone" value={user.phone} editable={editable}/>
				<TextField label="Nacionalidade" value={user.location.country} editable={editable}/>
				<TextField label="Endereço" value={location} editable={editable}/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	
	scroll: {
		width: '100%',
		marginTop: 15,
		paddingHorizontal: 10,
	},

	name: {
		color: Colors.GRAY,
		fontWeight: 'bold',
		fontSize: 22,
	},
});