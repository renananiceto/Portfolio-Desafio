import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Sobre from '../Compoents/Sobre'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function sobre() {
  return (
    <div>
      <GlobalStyle />
      <Sobre />
    </div>
  )
}
