
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,  } from 'react-native';
import { PokemonCard } from './src/pokemonCard.js'



const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=200'
class App extends Component {
    state = {
        
        data: [],
        fetchedData: [],
        tern: '',
        selectedTags: []
    }
    filter = (tern) => {
        this.setState({ tern: tern });
        console.log(tern); 
        let newPokemon = this.state.fetchedData.filter(function (item) {
            return item.name.toLowerCase().indexOf(tern.toLowerCase()) > -1;
        });
        this.setState({ data: newPokemon });
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
       

        this.setState({ data: dataToState });
        this.setState({ fetchedData: dataToState });

    }
    
    render() {
        let pokemonData = this.state.data.map((data, i) => {
            return (<PokemonCard key={i} {...data}
                handler={this.handler}
                />)
        })

        return (

            <View style={styles.body} >
                <View style={styles.header}>
                    <Text style={styles.text}>Pokedox</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.filter}
                    />
                </View>
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
            padding: 30,
            flex: 1,
            backgroundColor: '#63806c',
            flexDirection: "row",
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: 50,
            borderRadius: 10
        },
        header: {
            padding: 50,
            padding: 50,
            flexDirection: 'row',
            height: 90,
            backgroundColor: '#3c4d41',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        text: {
            color: 'orange',
            fontSize: 40,
            fontWeight: 'bold'
        },
        input: {
            backgroundColor: 'white',
            width: 300,
            height: 30,
            borderRadius: 5
        },
    }
)
export default App;

