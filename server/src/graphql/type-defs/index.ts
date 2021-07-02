import { mergeTypeDefs } from '@graphql-tools/merge'
import pokemonTypes from './pokemon'

export default mergeTypeDefs([
  pokemonTypes
])
