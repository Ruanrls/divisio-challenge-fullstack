import styled from 'styled-components'

export const title = styled.span`
  color: #104a7b;
  font-size: 36px;
  font-family: 'Roboto';
  margin-inline: auto;
  margin-bottom: 15px;
`
export const container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 100px;
`

export const gridScroll = styled.div`
  padding: 20px 40px 30px 20px;

  max-height: 740px;
  overflow-x: hidden;
  overflow-y: auto;

  margin-bottom: 20px;
`

export const grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  align-items: center;
  justify-items: center;

  margin-bottom: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const loaderContainer = styled.div`
  position: relative;
  bottom: 100%;
  right: 0;
  z-index: 30;
`

export const error = styled.h1`
  color: rgba(213, 13, 13, 1);

  font-weight: bold;
`
