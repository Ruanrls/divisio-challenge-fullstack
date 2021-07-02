import styled, { css } from 'styled-components'

interface shadow {
  shadow: string[]
}

export const container = styled.div<shadow>`
  cursor: pointer;

  width: 300px;
  height: 350px;

  border-radius: 25px;
  border: 2px solid ${({ shadow }) => shadow[0]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  box-shadow: ${({ shadow }) =>
    css`
      ${shadow[0]} 5px 5px, ${shadow[1]} 10px 10px, ${shadow[2]} 15px 15px , ${shadow[3]}   20px 20px, ${shadow[4]} 25px 25px
    `};

  transition: all 1.5s;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    box-shadow: none;
    border: 2px solid ${({ shadow }) => shadow[0]};
  }
`

export const pokemonImage = styled.img`
  width: 200px;
  height: 200px;
`

export const tagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`

export const tag = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 25px;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`
export const name = styled.span`
  font-family: 'Roboto';
  font-weight: 300;
`
