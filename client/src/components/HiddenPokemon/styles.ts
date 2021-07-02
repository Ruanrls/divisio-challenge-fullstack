import styled from 'styled-components'

export const title = styled.span`
  color: #104a7b;
  font-size: 36px;
  font-family: 'Roboto';
  margin-inline: auto;
  margin-bottom: 50px;
  white-space: nowrap;
`
export const container = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  height: 100%;
  margin-inline: auto;
  margin-top: 50px;

  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 640px;
  }

  @media screen and (max-width: 800px) {
    width: 320px;
  }
`

export const pokemonImage = styled.img`
  width: 180px;
  height: 180px;
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
export const name = styled.span<IIsHidden>`
  font-family: 'Roboto';
  font-weight: 300;

  filter: ${({ isHidden }) => (isHidden ? 'blur(5px)' : '')};

  transition: all 1s;
`
export const pokemonContainer = styled.div<IShadow>`
  cursor: pointer;

  width: 200px;
  height: 250px;

  border-radius: 25px;

  border: 2px solid ${({ shadow }) => (shadow[0] != undefined ? shadow[0] : '')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  transition: all 1.5s;

  filter: ${({ isHidden }) => (isHidden ? 'brightness(0)' : '')};

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    box-shadow: none;
    border: 2px solid ${({ shadow }) => shadow[0]};
  }
`

interface IShadow {
  shadow: string[]
  isHidden?: boolean
}

interface IIsHidden {
  isHidden: boolean
}
