import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemon: [],
      filteredPokemon: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemon: pokemon, filteredPokemon: pokemon}))
  }

  newPokemon = (e) => {
    let pokemon = {name: e.target.name.value, hp: e.target.hp.value, sprites: {front: e.target.frontUrl.value, back: e.target.backUrl.value}}
    console.log(pokemon)
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accepts': "application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon: [pokemon, ...this.state.pokemon], filteredPokemon: [pokemon, ...this.state.filteredPokemon]}))
  }

  setPokemon = event => {
    console.log(this.state.pokemon)
    let name = event.target.value
    let newPokemon = this.state.pokemon.filter((poke) => {
      return poke.name.includes(name)
    })
    this.setState(prevState => {
      return {
        ...prevState,
        filteredPokemon: newPokemon
      }
    })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon}/>
        <br />
        <Search setPokemon={this.setPokemon}/>
        <br />
        <PokemonCollection filteredPokemon={this.state.filteredPokemon} pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
