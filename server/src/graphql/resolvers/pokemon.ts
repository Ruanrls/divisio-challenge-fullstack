import { PokemonService } from '../../services/pokemonService'

const pokemonService = new PokemonService()

export default {
  Query: {
    Pokemons: async (_, {limit, offset, isLegendary}) => {
      return await pokemonService.getPokemons(limit, offset, isLegendary)
    }
  }
}
