import React from 'react'
import Contacts from '../Compoents/Contacts'

import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function contacts() {
  return (
    <div>
      <GlobalStyle />
      <Contacts />
    </div>
  )
}
