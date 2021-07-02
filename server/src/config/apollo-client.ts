import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
import React from 'react'
import fetch from 'cross-fetch'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    fetch
  }),
  cache: new InMemoryCache()
})

export {client}
