import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemon = pokemon => {
    return pokemon.map((poke) => {
      return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} front={poke.sprites.front} back={poke.sprites.back} />
    })
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon(this.props.filteredPokemon)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
