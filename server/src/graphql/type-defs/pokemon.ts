import { gql } from 'apollo-server-express'

export default gql`

type PokemonType {
  name: String!
}

type Pokemon {
  id: Int!
  name: String!
  types: [PokemonType]
}

type Query {
  Pokemons (limit: Int!, offset: Int!, isLegendary: Boolean): [Pokemon]
}
`
