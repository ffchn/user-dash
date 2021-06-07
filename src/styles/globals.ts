import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    *{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        box-sizing: border-box;
        color: #3a3a3a;
    }

    html, body{
        height: 100vh;
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

    h1 {
      margin-top: 0;
      font-size: 2rem;
      margin-bottom: 32px;
    }

    h2, h3, h4, h5, h6,p{
        margin-top: 0;
        margin-bottom: .5rem;
    }

    a{
        color: #07a3ee;
        cursor: pointer;
        text-decoration: none;
        transition: .5s;

        &:hover{
          color: #5fcbfb;
        }
      
    }

    @media screen and (max-width: 480px) {
      body{
        padding-top: 16px;
      }
    
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
  padding: 32px 5%;
  border-radius: 8px;
  background-color: white;
`

export default GlobalStyle
