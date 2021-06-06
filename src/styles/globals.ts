import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    *{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

`

export default GlobalStyle