import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    max-width: 1720px;
    margin-inline: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(0 ,0, 0, 0);
  }
  
  ::-webkit-scrollbar-thumb {
      background: rgba(255,0,0,0.8); 
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
  }
`
