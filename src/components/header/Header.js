import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../../styles/colors';
import Button from '../button/Button';



export default function Header({title}){
    const icon = <Feather name="filter" color="#fff" size={25} />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.searchBar}>

                <View style={styles.inputWrapper}>
                    <TextInput placeholder="Pesquisar usuário" style={styles.textInput}/>
                </View>

                <View style={styles.buttonWrapper}>
                    <Button icon={icon}/>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        paddingTop: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },

    inputWrapper: {
        width: '80%',
        height: '90%',
    },

    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.SECONDARY,
    },

    buttonWrapper: {
        width: '15%',
        height: '90%',
    },

});