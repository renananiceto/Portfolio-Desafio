import React from 'react'
import Lee from '../Compoents/Lee'


import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function taxi() {
  return (
    <div>
      <GlobalStyle />
      <Lee />
    </div>
  )
}
