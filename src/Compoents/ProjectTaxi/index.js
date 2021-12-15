import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styles'

export default function ProjectTaxi() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      taxis{
        title
        contentTaxis{
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

const { title, contentTaxis } = data.alldata.taxis[0]
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxTitle>
          <h1>{title}</h1>
        </S.BoxTitle>
          <S.BoxImg>
            <img src={contentTaxis[0].img.url} alt='#' />
          </S.BoxImg>
          <S.BoxParagrap>
            <p>{contentTaxis[0].description}</p>
            <a href='https://apptaxi.netlify.app/'>https://apptaxi.netlify.app/</a>
          </S.BoxParagrap>
      </S.Wrapper>
    </S.Container>
  )
}
