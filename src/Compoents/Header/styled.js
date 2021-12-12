import styled from "styled-components";
import teme from '../../images/G68b-1.svg'
import blackTeme from '../../images/G68Black.svg'


export const Component = styled.div`
  width: 100%;
  transition: 0.5s;
  background-image: url(${(props) => (props.back ? blackTeme : teme )});
  height: calc( 100vh - 30vh );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`
export const Background = styled.img`
  z-index: -1;
  position: absolute;
  width: 100%;
  fill: green;
`

export const Wrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

`

export const BoxTema = styled.div`
  width:20px;
  height: 20px;
  cursor: pointer;
img{
  width: 100%;
}
`

export const Paragraph = styled.div`
  color: ${(props) => (props.teste ? '#fff' : '#f1f')};
  cursor: pointer;
  font-size: 30px;
`

export const BoxLogo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
  img{
    width: 300px;
    height: 300px;
  }
`

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Aboutme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`

export const BoxLogoLocal = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  img{
    width: 100%;
  }
`

export const LogoLocal = styled.div`
  width: 30px;
  height: 30px;
`

export const ParagraphName = styled.p`
  font-size: 40px;
  font-family: 'Dancing Script';
  transition: 0.5s;
  color: ${(props) => (props.teste ? '#fff' : 'black')};
`

export const ParagraphLocal = styled.p`
  font-size: 40px;
  font-family: 'Bebas Neue';
  padding-left: 1rem;
  transition: 0.5s;
  color: ${(props) => (props.teste ? '#fff' : 'black')};
`

export const Contactis = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-family: 'Bebas Neue';
  a{
    text-decoration: none;
    color: ${(props) => (props.teste ? '#fff' : 'black')};
  }
`