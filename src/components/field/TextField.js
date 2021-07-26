import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../styles/colors';

export default function TextField({label, placeholder, type, editable, value}) {
	const [text, setText]   = React.useState(value.toString());
	const [focus, setFocus] = React.useState(false);
	
	function getColor(){
		if(editable==false) return Colors.LIGHTGRAY;
		return focus ? Colors.SECONDARY : Colors.GRAY;
	};
	

	return (
		<View style={styles.container}>
			<Text style={[styles.text, {color: getColor()}]} >{label}</Text>
			<TextInput
				style={[styles.input, {borderBottomColor: getColor()}]} 
				placeholder={placeholder}
				editable={editable}
				keyboardType={type}
				value={text}
				onChangeText={text => setText(text)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 10,
	},

	text: {
		fontFamily: 'Roboto',
		fontSize: 16,
	},

	input: {
		color: Colors.DARKGRAY,
		fontWeight: 'bold',
		height: 30,
		borderBottomWidth: 2.5,
		borderStyle: 'solid',
		paddingLeft: 10,
	},

}); 