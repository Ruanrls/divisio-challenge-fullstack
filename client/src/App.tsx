import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { HiddenPokemon } from 'components/HiddenPokemon'
import { Grid } from 'components/Grid'
import { ApolloProvider } from '@apollo/client'
import client from 'config/apollo-client'

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Header />
    <div className="content">
      <HiddenPokemon />
      <Grid />
    </div>
  </ApolloProvider>
)

export { App }
