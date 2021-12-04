import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.checkd ? '#1b212d' : '#FFFF'};
  transition: 0.5s;
  height: calc( 100vh - 60vh );
`

export const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const BoxElemente = styled.div`
  min-width: 15vw;
  height: 10vw;
  background-color: ${props => props.checkd ? '#c1c1c1' : '#4c4f55'};
  background-image: url( ${props => props.fundo} );
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: -80px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 45px 30px -30px rgb(0 0 0 / 30%);
  border-radius: 5px;
  :hover{
    top: -120px;
    box-shadow: 0 65px 40px -30px rgb(0 0 0 / 20%);
    transition: 0.5s;
    :after{
      content: "Taxi";
      display: flex;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      min-width: 15vw;
      height: 10vw;
      font-size: 8rem;
      transition: opacity 0.4s ease;
      background-color: #fff;
      font-family: 'Dancing Script';
    }
  }
  `
export const BoxElemente2 = styled.div`
  min-width: 15vw;
  height: 10vw;
  background-color: ${props => props.checkd ? '#c1c1c1' : '#4c4f55'};
  background-image: url( ${props => props.fundo} );
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: -80px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 45px 30px -30px rgb(0 0 0 / 30%);
  border-radius: 5px;
  :hover{
    top: -120px;
    box-shadow: 0 65px 40px -30px rgb(0 0 0 / 20%);
    transition: 0.5s;
    :after{
      content: "002";
      display: flex;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      min-width: 15vw;
      height: 10vw;
      font-size: 8rem;
      transition: opacity 0.4s ease;
      background-color: #fff;
      font-family: 'Dancing Script';
    }
  }
  `
export const BoxElemente3 = styled.div`
  min-width: 15vw;
  height: 10vw;
  background-color: ${props => props.checkd ? '#c1c1c1' : '#4c4f55'};
  background-image: url( ${props => props.fundo} );
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: -80px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 45px 30px -30px rgb(0 0 0 / 30%);
  border-radius: 5px;
  :hover{
    top: -120px;
    box-shadow: 0 65px 40px -30px rgb(0 0 0 / 20%);
    transition: 0.5s;
    :after{
      content: "003";
      display: flex;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      min-width: 15vw;
      height: 10vw;
      font-size: 8rem;
      transition: opacity 0.4s ease;
      background-color: #fff;
      font-family: 'Dancing Script';
    }
  }
  `

export const Box = styled.div`

`
