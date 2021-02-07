import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const PokemonCard = (props) => {
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
            <Link style={{ textDecoration: 'none' }} to={'/pokemonDescription/' + props.id}>
                <Text style={styles.pokemonName}>{props.name}</Text>
            </Link>
            <View style={styles.typeRow}  >
                {props.types && props.types.map((type, i) => (
                    <View  key={i}>
                        <View style={[retrunClass(type.name), styles.pokemontypelook]}>< Text
                            onPress={() => props.pressType(type.name)}
                            style={styles.pokeTypeText} key={i}>{type.name}</Text></View>
                    </View>
                ))}
            </View>
        </View>

    )
}

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
        backgroundColor: '#3c4d41',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6d8a76',
        textTransform: 'capitalize'
    },
    pokemonName: {
        color: 'white',
        fontSize: 30,

    },
    pokemontypelook: {
        width: 60,
        height: 20,
        borderRadius: 2,
        margin: 5

    },
    typepsychic: {
        backgroundColor: '#F95587',
    },
    typebug: {
        backgroundColor: '#A6B91A',
    },
    typenormal: {
        backgroundColor: '#A8A77A',
    }, typesteel: {
        backgroundColor: '#B7B7CE',
    }, typeground: {
        backgroundColor: '#E2BF65',
    }, typeflying: {
        backgroundColor: '#A98FF3',
    }, typefairy: {
        backgroundColor: '#D685AD',
    }, typewater: {
        backgroundColor: '#6390F0',
    }, typepoison: {
        backgroundColor: '#A33EA1',
    }, typerock: {
        backgroundColor: '#B6A136',
    }, typefighting: {
        backgroundColor: '#C22E28',
    }, typedark: {
        backgroundColor: '#705746',
    }, typeice: {
        backgroundColor: '#96D9D6',
    }, typefire: {
        backgroundColor: '#EE8130',
    }, typelctric: {
        backgroundColor: '#F7D02C',

    }, typegrass: {
        backgroundColor: '#7AC74C',
    },
    pokeTypeText: {
        textAlign: "center",
    },
    linkUnderline: {
        backgroundColor: 'red'
    },
    typeRow: {
    display: 'flex',
    flexDirection: 'row'
}

});

