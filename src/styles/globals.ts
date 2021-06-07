import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    *{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        box-sizing: border-box;
    }

    html, body{
        height: 100vh;
        overflow: hidden;
    }

    body{
        background-color: #e8e8e8;
        padding-top: 64px;
    }

    ul, ol, li{
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
    }

    a{
        cursor: pointer;
        text-decoration: none;
    }

`

export const Container = styled.div`
  max-width: 1480px;
  max-height: 100%;
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`

export const Card = styled.div`
  padding: 16px 32px;
  border-radius: 8px;
  background-color: white;
`

export default GlobalStyle
