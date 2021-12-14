import React from 'react'
import * as S from './styled'
import { graphql, useStaticQuery } from 'gatsby'


import moon from '../../images/moon.png'
import local from '../../images/local.png'
import logoLite from '../../images/LogoAnimation.gif'

export default function Header(props) {

  const data = useStaticQuery(graphql`
  query {
    alldata{
      headers {
        text
        titles {
          paragraph
        }
      }
    }
  }
`)

  const { text, titles } = data.alldata.headers[0]
  console.log('AAAA', data)
  return (
    <S.Component back={props.back}>
      <S.Wrapper>
        <div>
          <S.BoxTema>
            <img onClick={props.handleclick} src={moon} alt="" />
          </S.BoxTema>
          <S.ContainerLogo>
            <S.BoxLogo>
              <img src={logoLite} alt='#' />
            </S.BoxLogo>
          </S.ContainerLogo>
          <S.Aboutme>
            <div>
              <S.BoxLogoLocal>
                <S.LogoLocal>
                  <img src={local} alt="#" />
                </S.LogoLocal>
                <S.ParagraphLocal teste={props.teste}>{text}</S.ParagraphLocal>
              </S.BoxLogoLocal>
              <S.Contactis teste={props.teste}>
                <p><a href='/sobre'>{titles[0].paragraph}</a></p>
                <p><a href='/contacts'>{titles[1].paragraph}</a></p>
              </S.Contactis>
            </div>
          </S.Aboutme>
        </div>
      </S.Wrapper>
    </S.Component>
  )
}
