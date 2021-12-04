import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from "../Compoents/Header"
import Tema from "../Compoents/Tema"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const IndexPage = () => {
  const [color, setColor] = useState(false);

  const handlerColor = () => {
    setColor(!color);
  };

  return (
    <main>
      <GlobalStyle />
      <Header
        handleclick={() => handlerColor()}
        teste={color}
        back={color}
      />
      <Tema checkd={color} />
    </main>
  )
}

export default IndexPage
