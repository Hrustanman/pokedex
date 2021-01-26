import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Header } from './src/header.js';
import { PokemonCard } from './src/pokemonCard.js'
import { createStyles, maxHeight } from 'react-native-media-queries';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
class App extends Component {
    state = {
        
        data: []
    }
    componentDidMount = async () => {
        const responce = await fetch(url)
        let data = await responce.json()
        let dataToState = new Array();
        if (data.results.length > 0) {
            for (var i = 0; i < data.results.length; i++) {
                let url2 = "https://pokeapi.co/api/v2/pokemon/" + data.results[i].name;
            
               
                let pokemonData = await fetch(url2);
                let pokemonDataJson = await pokemonData.json()
                let types = pokemonDataJson.types.map(function (type) {
                    return {
                        name: type.type.name,
                        url: type.type.url
                    };

                });
                let image = pokemonDataJson.sprites.other["official-artwork"].front_default;
               
                let objectToInsert = {
                    types: types, 
                    name: data.results[i].name,
                    defense: pokemonDataJson.stats[2].base_stat,
                    image: image,
                    url: url,
                    weight: pokemonDataJson.weight
                };
                dataToState.push(objectToInsert);
            }
            console.log(dataToState);
        }
       

        this.setState({ data: dataToState })

    }

    render() {
        let pokemonData = this.state.data.map((data, i) => {
            return (<PokemonCard key={i} {...data}
                />)
        })

        return (
            <View style={styles.body} >
                <Header />
                <View style={styles.cardHolder}>
                    {pokemonData}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        body: {
            backgroundColor: '#333'
        },
        cardHolder: {
            flex: 1,
            backgroundColor: '#181818',
            flexDirection: "row",
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: 50
        },
    }
)
export default App;

