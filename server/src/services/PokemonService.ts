import { IGetPokemonResponse } from 'types/getPokemonResponse'
import { IPokemon } from 'types/pokemon'
import {client} from '../config/apollo-client'
import {GET_POKEMONS} from '../graphql/queries/pokemon'

export class PokemonService {

  private getTypes = ({pokemon_v2_pokemontypes}) => {
    let types = pokemon_v2_pokemontypes.map((type) => {
      return {name: type.pokemon_v2_type.name}
    })

    return types
  }

  public getPokemons = async (limit: number, offset: number, isLegendary: boolean) => {

    const data = await client.query({query: GET_POKEMONS, variables: {
      offset, limit, isLegendary

    }})

    let {pokemon_v2_pokemon}: IGetPokemonResponse= data.data

    let pokemons = pokemon_v2_pokemon.map((pokemon): IPokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: this.getTypes(pokemon)
      }
    })

    return pokemons
  }
}
