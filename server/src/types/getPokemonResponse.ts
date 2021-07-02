export interface IGetPokemonResponse {
  pokemon_v2_pokemon: {
    id: number

    name: string

    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string
      }
    }[]

  }[]
}
