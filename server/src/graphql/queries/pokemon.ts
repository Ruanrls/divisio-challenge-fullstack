import {gql} from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!, $isLegendary: Boolean!){
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: {pokemon_v2_pokemonspecy: {is_legendary: {_eq: $isLegendary}}}) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`
