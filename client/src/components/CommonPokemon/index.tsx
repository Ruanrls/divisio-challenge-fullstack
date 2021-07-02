import * as S from './styles'
import { IPokemon } from 'types/pokemon'
import { getColorByType } from 'utils/getPokemonColor'

export const CommonCard = ({ id, name, types }: IPokemon) => {
  return (
    <S.container shadow={getColorByType(types[0].name)}>
      <S.name>{name}</S.name>
      <S.pokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <S.tagContainer>
        {types.map((tag, index) => (
          <S.tag
            key={index}
            style={{
              backgroundColor: getColorByType(tag.name)[0]
            }}
          >
            {tag.name}
          </S.tag>
        ))}
      </S.tagContainer>
    </S.container>
  )
}
