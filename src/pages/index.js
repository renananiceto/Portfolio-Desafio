import * as React from "react"
import { createGlobalStyle } from 'styled-components'

import Header from "../Compoents/Header"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const IndexPage = () => {
  return (
    <main>
    <GlobalStyle />
    <Header />
    </main>
  )
}

export default IndexPage
