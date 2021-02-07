import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import { NativeRouter, Route, Link, } from "react-router-native";
export const PokemonDescription = (props) => {
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
        <View style={styles.description}>
            <Text style={styles.text}>{props.name} <Text style={{ color: '#616161', fontSize: 25 }}>№{props.id}</Text> </Text>
            <View style={styles.descriptionInner}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image style={styles.image}
                        source={{ uri: props.image }} />
                </View>
                <View style={styles.descriptionInnerText}>
                    <View style={styles.typeRow}>
                    <Text style={styles.categoryText}>Weight:</Text>
                        <Text style={styles.categoryTextValue}>{props.weight} </Text>
                    </View>
                    <View style={styles.typeRow}>
                    <Text style={styles.categoryText}>Abilities:</Text>
                        <Text style={styles.categoryTextValue}>{props.abilities}</Text>
                    </View>
                    <View style={styles.typeRow}>
                    <Text style={styles.categoryText}>Height:</Text>
                        <Text style={styles.categoryTextValue}>{props.height}</Text>
                    </View>

                    <View style={styles.typeRow}>
                        <Text style={styles.categoryText}>Type:</Text>
                        {
                            props.types && props.types.map((type, i) => (
                                <View style={styles.pokemonType} key={i}>
                                    <View
                                        style={[retrunClass(type.name), styles.pokemontypelook]}>
                                        < Text style={styles.pokeTypeText}>                                      {type.name}
                                        </Text>
                                    </View>
                                </View>))
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    description: {
        marginTop: 60,
        marginBottom: 60,
        height: 600,
        width: 800,
        backgroundColor: '#44F1E6',
        borderRadius: 10,

    },
    descriptionInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    text: {
        textAlign: "center",
        textTransform: 'capitalize',
        fontSize: 40,
        fontWeight: '500',
        marginTop: 20,

    },
    image: {
        width: 400,
        height: 400
    },
    descriptionInnerText: {
        width: '50%',
        color: 'red',
        textTransform: 'capitalize',
    },
    categoryText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',

    },
    categoryTextValue: {
        color: 'black',
        fontSize: 25,
        marginLeft: 15
    },
    pokemontypelook: {
        width: 100,
        borderRadius: 2,
        margin: 10,
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
  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    typeRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
}
})