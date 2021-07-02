import { IPokemon } from 'types/pokemon'
import { getColorByType } from 'utils/getPokemonColor'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from 'graphql/queries/pokemon'

const HiddenPokemon = () => {
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 50,
      isLegendary: true
    }
  })

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 50) + 1
  }

  const [pokemon, setPokemon] = useState<IPokemon>()

  const [isHidden, setIsHidden] = useState<boolean>(true)

  useEffect(() => {
    if (data && !loading) {
      setPokemon(data.Pokemons[generateRandomNumber()])
    }
  }, [loading])

  const handleClick = () => {
    setIsHidden(false)

    setTimeout(() => {
      setIsHidden(true)
    }, 3000)

    setTimeout(() => {
      const newId = generateRandomNumber()
      setPokemon(data.Pokemons[newId])
    }, 4000)
  }

  if (pokemon)
    return (
      <S.container>
        <S.title>Who is this pokémon?</S.title>
        <S.pokemonContainer
          onClick={handleClick}
          isHidden={isHidden}
          shadow={getColorByType(pokemon.types[0].name)}
        >
          <S.name isHidden={isHidden}>{pokemon.name}</S.name>
          <S.pokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
        </S.pokemonContainer>
      </S.container>
    )

  return null
}

export { HiddenPokemon }
