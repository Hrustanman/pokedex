import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import { createStyles, maxHeight } from 'react-native-media-queries';


export const PokemonCard = (props) => {
 
    //function retrunClass(pokeType) {
    //    if (pokeType == 'psychic')
    //        return styles.typepsychic
    //    else
    //        return styles.defaultType
    //}
    function retrunClass(pokeType) {
        switch (pokeType) {
            case 'psychic': return styles.typepsychic;
            case 'bug': return styles.typebug;
            case 'normal': return styles.typenormal;
            case 'steel': return styles.typesteel;
            case 'ground': return styles.typeground;
            case 'flying': return styles.typeflying;
            case 'fairy': return styles.typefairy;
            case 'water': return styles.typewater;
            case 'poison': return styles.typepoison;
            case 'rock': return styles.typerock;
            case 'fighting': return styles.typefighting;
            case 'dark': return styles.typedark;
            case 'ice': return styles.typeice;
            case 'fire': return styles.typefire;
            case 'elctric': return styles.typelctric;
            case 'grass': return styles.typegrass;
        }
    }

    return (
        <View style={styles.cardstyle}>
            <View>
                <Image style={styles.cardstyleImage}
                    source={{ uri: props.image }} />
            </View>
            <Text style={styles.pokemonName}>{props.name}</Text>
            {props.types && props.types.map((type, i) => (
                <>
                    < Text key={i}>{type.name}</Text>
                    <View style={[retrunClass(type.name)]}></View>
                    </>
            ))}


        </View>

    )
}
maxHeight(200, {
    cardstyle: {
        height: 500
    }
})
const styles = StyleSheet.create({
    cardstyleImage: {
        height: 150,
        width: 150
    }
    ,
    cardstyle: {
        margin: 10,
        height: 300,
        width: 300,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonName: {
        color: 'white',
        fontSize: 30
    },
    typepsychic: {
        backgroundColor: '#F95587',
        width: 50,
        height: 20,
    },
    typebug: {
        backgroundColor: '#A6B91A',
        width: 50,
        height: 20,
    },
    typenormal: {
        backgroundColor: '#A8A77A',
        width: 50,
        height: 20,
    }, typesteel: {
        backgroundColor: '#B7B7CE',
        width: 50,
        height: 20,
    }, typeground : {
        backgroundColor: '#E2BF65',
        width: 50,
        height: 20,
    }, typeflying: {
        backgroundColor: '#A98FF3',
        width: 50,
        height: 20,
    }, typefairy: {
        backgroundColor: '#D685AD',
        width: 50,
        height: 20,
    }, typewater: {
        backgroundColor: '#6390F0',
        width: 50,
        height: 20,
    }, typepoison : {
        backgroundColor: '#A33EA1',
        width: 50,
        height: 20,
    }, typerock: {
        backgroundColor: '#B6A136',
        width: 50,
        height: 20,
    }, typefighting: {
        backgroundColor: '#C22E28',
        width: 50,
        height: 20,
    }, typedark: {
        backgroundColor: '#705746',
        width: 50,
        height: 20,
    }, typeice : {
        backgroundColor: '#96D9D6',
        width: 50,
        height: 20,
    }, typefire : {
        backgroundColor: '#EE8130',
        width: 50,
        height: 20,
    }, typelctric: {
        backgroundColor: '#F7D02C',
      
    }, typegrass: {
        backgroundColor: '#7AC74C',
        width: 50,
        height: 20,
    }
});

