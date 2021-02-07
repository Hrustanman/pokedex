
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { PokemonCard } from './src/pokemonCard.js'
import { PokemonDescription } from './src/pokemonDescription.js'
//import { BrowserRouter as Router, Route, Link } from "react-router-native";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=200'
class App extends Component {
    state = {
        data: [],
        fetchedData: [],
        tern: '',
        selectedTags: []
    }
    pressType = (type) => {
        let newPokemonList = this.state.fetchedData.filter(
            function (pokemon) {
                return pokemon.types.some(function (nestedType) {
                    return nestedType.name == type
                })
            } 
        )
        this.setState({ data: newPokemonList })
        console.log(newPokemonList)
    alert(type)
}

    filter = (tern) => {
        this.setState({ tern: tern });
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
                    weight: pokemonDataJson.weight,
                    abilities: pokemonDataJson.abilities[0].ability.name,
                    height: pokemonDataJson.height,
                    id: pokemonDataJson.id,

                };
                dataToState.push(objectToInsert);
            }
        }


        this.setState({ data: dataToState });
        this.setState({ fetchedData: dataToState });

    }

    render() {
        let pokemonData = this.state.data.map((data, i) => {
            return (<PokemonCard key={i} {...data}
                handler={this.handler}
                pressType={this.pressType}
            />)
        })
        let pokemonDescription = this.state.data.map((data, i) => {
            return (<PokemonDescription key={i} {...data}
            />)
        })
        return (
            <Router>
                <View style={styles.body} >
                    <View style={styles.header}>
                        <Link to='/'><Text style={styles.text}>Pokedox</Text></Link>
                        <TextInput style={styles.input}
                            onChangeText={this.filter}
                        />
                    </View>
                    <View style={styles.mainWindow}>
                    <Route exact path="/">
                    <View style={styles.cardHolder}>
                       {pokemonData}
                        </View>
                    </Route>
                        <Route path={'/pokemonDescription/:id'}
                            render={({ match }) => {
                                const { id } = match.params
                                let pokemon = this.state.data.find((el) => {
                                    return el.id === Number(id)
                                });
                              
                                return (
                                    <PokemonDescription {...pokemon} />
                                )
                            }} />
                </View>
                </View>
               
            </Router>
        )
    }
}
const styles = StyleSheet.create(
    {
        body: {
            backgroundColor: '#333',
            height: '100%',
        },
        mainWindow: {
            flexDirection: 'row',
            justifyContent: 'center',
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

