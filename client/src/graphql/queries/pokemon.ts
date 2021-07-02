import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!, $isLegendary: Boolean) {
    Pokemons(limit: $limit, offset: $offset, isLegendary: $isLegendary) {
      id
      name
      types {
        name
      }
    }
  }
`
