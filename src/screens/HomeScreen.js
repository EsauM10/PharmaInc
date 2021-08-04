import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { getUsers } from '../services/api';

import Header from '../components/header/Header';
import UserCard from '../components/card/UserCard';
import LoadingMore from '../components/loading/LoadingMore';



function filterUsers(data, text){
	return (text=="") ? data : data.filter((user) => (user.name.first.includes(text)));
}

export default function HomeScreen(){
	const [users, setUsers]     = useState([]);
	const [loading, setLoading] = useState(false);
	const [text, setText] 		= useState("");
	const renderItem = ({item}) => <UserCard user={item}/>
	
	async function fetchUsers(){
		if(text != "") return;
		setLoading(true);
		await getUsers(5).then(data => setUsers((users) => [...users, ...data.results]));
		setLoading(false);
	}

	useEffect(() => { 
		fetchUsers();
	}, []);

	return (
		<View style={styles.container}>
			<Header title="Pharma INC" inputChangeText={(text) => setText(text)}/>

			<View style={styles.scroll}>
				<FlatList 
					style={{paddingHorizontal: 10}}
					data={filterUsers(users, text)}
					renderItem={renderItem}
					keyExtractor={(item) => item.email}
					onEndReached={fetchUsers}
					onEndReachedThreshold={0.1}
					ListFooterComponent={loading && <LoadingMore />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	scroll: {
		flex: 1,
		marginTop: 15,
	},

});