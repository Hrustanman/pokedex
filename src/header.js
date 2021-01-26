import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

let Cl = () => {
    return (alert('Non Stop'))
}
export const Header = (props) => {
    return (<View style={styles.header}>
        <Text style={styles.text}  >POKEDOX</Text>
        <TextInput style={styles.input} defaultValue = 'poke' />
        <Button title='Пошук' onPress={Cl} />
    </View>)
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#931c1c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { 
        color: 'orange',
        fontSize: 20
    },
    input: {
        backgroundColor: 'white',
        width: '30%'
    },

});