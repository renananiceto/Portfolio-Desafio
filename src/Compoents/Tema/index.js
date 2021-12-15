import React from 'react'
import * as S from './styles'
import taxi from '../../images/taxi.png'
import wars from '../../images/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S1-2560x1440-3dc68a07cace02e826ad42a2de5279b0.jpg'
import lol from '../../images/17155348681021.jpg'

export default function Tema(props) {
  return (
    <S.Container checkd={props.checkd}>
      <S.Wrapper>
        <a href='/taxi'>
          <S.Box>
            <S.BoxElemente
              fundo={taxi}
              checkd={props.checkd}
            />
          </S.Box>
        </a>
        <a href='/wars'>
          <S.Box>
            <S.BoxElemente2
              fundo={wars}
              checkd={props.checkd} />
          </S.Box>
        </a>
        <a href='/lee'>
          <S.Box>
            <S.BoxElemente3
              fundo={lol}
              checkd={props.checkd} />
          </S.Box>
        </a>
      </S.Wrapper>
    </S.Container>
  )
}
