import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'

export default function ProjectTaxi() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      wars{
        title
        warContents{
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

const { title, warContents } = data.alldata.wars[0]
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxTitle>
          <h1>{title}</h1>
        </S.BoxTitle>
          <S.BoxImg>
            <img src={warContents[0].img.url} alt='#' />
          </S.BoxImg>
          <S.BoxParagrap>
            <p>{warContents[0].description}</p>
            <a href='https://determined-fermat-f19973.netlify.app/'>https://determined-fermat-f19973.netlify.app//</a>
          </S.BoxParagrap>
      </S.Wrapper>
    </S.Container>
  )
}
