import React from 'react'
import * as S from './styles'
import git from '../../images/git.png'

export default function Sobre() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxTitle>
          <h1>Sobre</h1>
        </S.BoxTitle>
        <S.BoxContent>
          <a href='https://github.com/renananiceto'>
            <S.BoxGit />
          </a>
          <a href='https://www.linkedin.com/in/renan-aniceto-07b08b20b/'>
            <S.BoxText />
          </a>
        </S.BoxContent>
      </S.Wrapper>
    </S.Container>
  )
}
