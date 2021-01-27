//import React, { Component } from 'react'
//import { View, Text, StyleSheet, TextInput, Button, Image, maxHeight } from 'react-native'
//import { createStyles, } from 'react-native-media-queries';

//export class PokemonType extends Component {
//    handleClick = () => {
//        alert(this.props.name);
//        console.log(this.props.name)
//    }

//    render() {
//        return (

//            <Button title="Example" onPress={this.handleClick} />


//        );
//    }
//}

//export const PokemonCard = (props, handler) => {

//    //function retrunClass(pokeType) {
//    //    if (pokeType == 'psychic')
//    //        return styles.typepsychic
//    //    else
//    //        return styles.defaultType
//    //}
//    function retrunClass(pokeType) {
//        switch (pokeType) {
//            case 'psychic': return styles.typepsychic;
//            case 'bug': return styles.typebug;
//            case 'normal': return styles.typenormal;
//            case 'steel': return styles.typesteel;
//            case 'ground': return styles.typeground;
//            case 'flying': return styles.typeflying;
//            case 'fairy': return styles.typefairy;
//            case 'water': return styles.typewater;
//            case 'poison': return styles.typepoison;
//            case 'rock': return styles.typerock;
//            case 'fighting': return styles.typefighting;
//            case 'dark': return styles.typedark;
//            case 'ice': return styles.typeice;
//            case 'fire': return styles.typefire;
//            case 'elctric': return styles.typelctric;
//            case 'grass': return styles.typegrass;
//        }
//    }



//    return (
//        <View style={styles.cardstyle}>
//            <View>
//                <Image style={styles.cardstyleImage}
//                    source={{ uri: props.image }} />
//            </View>
//            <Text style={styles.pokemonName}>{props.name}</Text>
//            {props.types && props.types.map((type, i) => (
//                <View key={i}>
//                    < Text key={i}>{type.name}</Text>
//                    <View style={[retrunClass(type.name), styles.pokemontypelook]}></View>
//                    <PokemonType {...type}
//                    />

//                </View>
//            ))}
//        </View>

//    )
//}

//const styles = StyleSheet.create({
//    cardstyleImage: {
//        height: 150,
//        width: 150
//    }
//    ,
//    cardstyle: {
//        margin: 10,
//        height: 300,
//        width: 300,
//        backgroundColor: '#3c4d41',
//        alignItems: 'center',
//        justifyContent: 'center',
//    },
//    pokemonName: {
//        color: 'white',
//        fontSize: 30
//    },
//    pokemontypelook: {
//        width: 50,
//        height: 20,
//    },
//    typepsychic: {
//        backgroundColor: '#F95587',
//    },
//    typebug: {
//        backgroundColor: '#A6B91A',
//    },
//    typenormal: {
//        backgroundColor: '#A8A77A',
//    }, typesteel: {
//        backgroundColor: '#B7B7CE',
//    }, typeground: {
//        backgroundColor: '#E2BF65',
//    }, typeflying: {
//        backgroundColor: '#A98FF3',
//    }, typefairy: {
//        backgroundColor: '#D685AD',
//    }, typewater: {
//        backgroundColor: '#6390F0',
//    }, typepoison: {
//        backgroundColor: '#A33EA1',
//    }, typerock: {
//        backgroundColor: '#B6A136',
//    }, typefighting: {
//        backgroundColor: '#C22E28',
//    }, typedark: {
//        backgroundColor: '#705746',
//    }, typeice: {
//        backgroundColor: '#96D9D6',
//    }, typefire: {
//        backgroundColor: '#EE8130',
//    }, typelctric: {
//        backgroundColor: '#F7D02C',

//    }, typegrass: {
//        backgroundColor: '#7AC74C',
//        width: 50,
//        height: 20,
//    }
//});

