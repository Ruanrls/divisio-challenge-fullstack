import { IPokemon } from './pokemon'

export interface IFetchPokemon {
  data: {
    Pokemons: IPokemon[]
  }
}
