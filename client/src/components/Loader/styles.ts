import styled, { keyframes } from 'styled-components'

const loading = keyframes`
    0% {
        transform: scale3d(1, 1, 1);
    }

    25% {
        transform: scale3d(1.2, 0.8, 2);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
`

export const container = styled.div`
  background-image: url('./images/loaders/pokeball.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px;

  width: 25px;
  height: 25px;

  animation: ${loading} 2s cubic-bezier(0.67, 0.01, 0.21, 0.75) infinite;
`
