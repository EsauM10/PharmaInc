import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from './src/styles/colors';
import HomeScreen from './src/screens/HomeScreen';


const Tab = createBottomTabNavigator();

function getTabIcon(Package, iconName, size){
	return {
		tabBarIcon: ({focused}) => (<Package name={iconName} size={size} color={focused ? Colors.SECONDARY : Colors.GRAY} />),
	};
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{showLabel: false}}>
				<Tab.Screen name="Home" component={HomeScreen}  options={getTabIcon(MaterialIcons, "home-filled", 30)}/>
			</Tab.Navigator>
    	</NavigationContainer>
  	);
}


