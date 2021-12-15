import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'

export default function ProjectTaxi() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      lees{
        title
        leeContents{
          img{
            url
          }
          description
        }
      }
    }
  }
`)

console.log(data)

const { title, leeContents } = data.alldata.lees[0]
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxTitle>
          <h1>{title}</h1>
        </S.BoxTitle>
          <S.BoxImg>
            <img src={leeContents[0].img.url} alt='#' />
          </S.BoxImg>
          <S.BoxParagrap>
            <p>{leeContents[0].description}</p>
            <a href='https://renananiceto.github.io/-first-screen-lee-sin/'>https://renananiceto.github.io/-first-screen-lee-sin/</a>
          </S.BoxParagrap>
      </S.Wrapper>
    </S.Container>
  )
}
