import styled from 'styled-components'

export const pokedex = styled.img`
  margin-inline: 50px;
  object-fit: scale-down;
  height: 150px;
  pointer-events: none;

  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`

export const pokeball = styled.div`
  background-image: url('/images/header/pokeball.png');
  background-size: 200px 200px;
  background-repeat: no-repeat;
  background-position: center;
  margin-inline: auto;
  height: 150px;
  width: 200px;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 200px;

    background-size: 150px 150px;
  }
`

export const container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #57575a;
  max-height: 150px;
  overflow: hidden;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: inline-block;

    max-height: 100px;
  }
`
