import styled from "styled-components";
import teme from '../../images/G68b-1.svg'
import blackTeme from '../../images/G68Black.svg'

export const Container = styled.div`
  width: 100%;
  transition: 0.5s;
  background-image: url(${(props) => (props.back ? blackTeme : teme )});
  height: calc( 100vh - 30vh );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`

export const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-family: 'Bebas Neue';
`

export const BoxContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 39rem;
  `

export const BoxText = styled.div`
  width: 50%;
  padding: 2rem;
  font-size: 2rem;
  border-radius: 45px;
  background-color: #FFFF;
  box-shadow: 0 65px 40px -30px rgb(0 0 0 / 20%);
`