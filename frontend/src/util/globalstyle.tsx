import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import FontAwesomeTTF from '../fonts/fa-solid-900.ttf'
import FontAwesomeEOT from '../fonts/fa-solid-900.eot'
import FontAwesomeWOFF from '../fonts/fa-solid-900.woff'
import FontAwesomeWOFF2 from '../fonts/fa-solid-900.woff2'
import FontAwesomeIE from '../fonts/fa-solid-900.eot?#iefix'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    background: string
    background2: string
    background3: string
    background4: string
    color: string
    button: {
      background: string
      color: string
    }
  }
}

export interface IGlobalStyle {
  light: DefaultTheme
  dark: DefaultTheme
}

export const initialTheme: IGlobalStyle = {
  light: {
    name: 'light',
    background: 'white',
    background2: 'wheat',
    background3: '#E5FFCC',
    background4: '#CCFF99',
    color: '#2D2424',
    button: {
      background: '#2D2424',
      color: 'white'
    }
  },
  dark: {
    name: 'dark',
    background: '#2D2424',
    background2: '#171010',
    background3: '#404040',
    background4: 'grey',
    color: 'white',
    button: {
      background: 'white',
      color: '#2D2424'
    }
  }
}

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    @font-face {
        font-family: "Font Awesome 5 Free";
        font-style: normal;
        font-weight: 900;
        font-display: block;
        src: url(${FontAwesomeTTF}) format("truetype"),
            url(${FontAwesomeEOT}),
            url(${FontAwesomeIE}) format("embedded-opentype"),
            url(${FontAwesomeWOFF2}) format("woff2"),
            url(${FontAwesomeWOFF}) format("woff");
      }
`
