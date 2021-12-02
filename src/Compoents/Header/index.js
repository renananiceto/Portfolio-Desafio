import React, { useState } from 'react'
import * as S from './styled'



import tema from '../../images/G68b-1.svg'
import moon from '../../images/moon.png'
import logor from '../../images/LogoR.jpg'
import local from '../../images/local.png'
import logoLite from '../../images/LogoAnimation.gif'

export default function Header() {
  const [color, setColor] = useState(false);

  const handlerColor = () => {
    setColor(!color);

    console.log(color);
  };

  return (
    <S.Component back={color}>
      <S.Wrapper>
        <div>
          <S.BoxTema>
            <img onClick={handlerColor} src={moon} alt="" />
          </S.BoxTema>
          <S.ContainerLogo>
            <S.BoxLogo>
              <img src={logoLite} alt='#' />
            </S.BoxLogo>
          </S.ContainerLogo>
          <S.Aboutme>
            {/* <S.ParagraphName teste={color}>Renan Aniceto</S.ParagraphName> */}
            <div>
              <S.BoxLogoLocal>
                <S.LogoLocal>
                  <img src={local} alt="#" />
                </S.LogoLocal>
                <S.ParagraphLocal teste={color}>Rio De Janeiro</S.ParagraphLocal>
              </S.BoxLogoLocal>
            </div>
          </S.Aboutme>
        </div>
      </S.Wrapper>
    </S.Component>
  )
}
