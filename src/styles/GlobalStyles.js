import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import bg from '../assets/images/hooks-bg.png'

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%
  }

  body {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    background-image: ${`url(${bg})`}
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer
  }

`
