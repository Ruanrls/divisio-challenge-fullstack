import * as S from './styles'
import { CommonCard } from 'components/CommonPokemon'
import { useState, UIEvent, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from 'graphql/queries/pokemon'
import { Loader } from 'components/Loader'
import { IPokemon } from 'types/pokemon'

export const Grid = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  const variables = {
    offset: 0,
    limit: 30,
    isLegendary: false
  }

  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables
  })

  useEffect(() => {
    if (data && !loading) {
      setPokemons([...pokemons, ...data.Pokemons])
    }
  }, [loading])

  const handleScroll = async (scrollEvent: UIEvent<HTMLDivElement>) => {
    const target = scrollEvent.target as HTMLDivElement

    if (
      target.scrollTop >=
      (target.scrollHeight - target.offsetHeight) * (95 / 100)
    ) {
      const morePokemons = await fetchMore({
        variables: {
          offset: pokemons.length,
          limit: 30,
          isLegendary: false
        }
      })

      if (data && !error) {
        setPokemons([...pokemons, ...morePokemons.data.Pokemons])
      }
    }
  }

  return (
    <S.container>
      <S.title>Commons</S.title>
      <S.gridScroll onScroll={handleScroll} id="scroller">
        <S.grid>
          {pokemons.map((pokemon, index) => (
            <CommonCard
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </S.grid>
      </S.gridScroll>

      {loading && (
        <S.loaderContainer>
          <Loader />
        </S.loaderContainer>
      )}

      {error && <S.error>Error: make sure the server is running</S.error>}
    </S.container>
  )
}
