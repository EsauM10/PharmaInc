import React from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import UserScreen from '../../screens/UserScreen';
import Colors from '../../styles/colors';
import Card from './Card';


export default function UserCard({user}){
	const [visible, setVisible] = React.useState(false);

	return (
		<TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
			<Image 
				style={styles.image}
				source={{uri: user.picture.large}}
			/>
			<View style={styles.content}>
				 <Card user={user}/>
			</View>

			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => {setVisible(!visible)}}
			>
				<UserScreen user={user} onPress={() => setVisible(!visible)} />
			</Modal>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		paddingLeft: 10,
		marginTop: 5,
		borderWidth: 2,
		borderColor: Colors.BORDER,
		borderRadius: 5,
	},

	image: {
		width: 80,
		height: 80,
		borderRadius: 50,
	},

	content: {
		flex: 1,
	},
});