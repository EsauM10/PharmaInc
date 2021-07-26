import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../styles/colors';


export default function Button({icon, color, onPress}){
	
	function getColor(){
		return {backgroundColor: (color) ? color : Colors.SECONDARY};
	}
	
	return (
		<TouchableOpacity style={[styles.container, getColor()]} onPress={onPress}>
			{icon}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
});