import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { getUsers } from '../services/api';

import Header from '../components/header/Header';
import UserCard from '../components/card/UserCard';
import LoadingMore from '../components/loading/LoadingMore';



export default function HomeScreen(){
	const [users, setUsers]     = useState([]);
	const [loading, setLoading] = useState(false);
	const renderItem = ({item}) => <UserCard user={item}/>

	async function fetchUsers(){
		setLoading(true);
		await getUsers(5).then(data => setUsers((users) => [...users, ...data.results]));
		setLoading(false);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	
	return (
		<View style={styles.container}>
			<Header title="Pharma INC"/>
			
			<View style={styles.scroll}>
				<FlatList 
					style={{paddingHorizontal: 10}}
					data={users}
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