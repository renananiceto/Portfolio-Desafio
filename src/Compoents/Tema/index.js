import React from 'react'
import * as S from './styles'
import taxi from '../../images/taxi.png'

export default function Tema(props) {
  return (
    <S.Container checkd={props.checkd}>
      <S.Wrapper>
        <S.Box>
          <S.BoxElemente
            fundo={taxi}
            checkd={props.checkd}
          />
        </S.Box>
        <S.Box>
          <S.BoxElemente2
            checkd={props.checkd} />
        </S.Box>
        <S.Box>
          <S.BoxElemente3
            checkd={props.checkd} />
        </S.Box>
      </S.Wrapper>
    </S.Container>
  )
}
