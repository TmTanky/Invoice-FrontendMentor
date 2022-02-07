import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(30, 33, 57);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 100;
  position: fixed;

  @media screen and (min-width: 300px) and (max-width: 650px) {
    height: 80px;
    width: 100vw;
    flex-direction: row;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const UpperContainer = styled.div`
  flex: 3;
  display: flex;
  @media screen and (min-width: 300px) and (max-width: 450px) {
    flex: 1;
  }
  @media screen and (min-width: 451px) and (max-width: 650px) {
    flex: 2;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: rgb(124, 93, 250);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`

export const LowerContainter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  @media screen and (max-width: 650px) {
    flex-direction: row;
  }
`

export const ThemeToggle = styled.div`
  flex: 1;
  height: 80px;
  width: 80px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px gray;
  
  @media screen and (min-width: 300px) and (max-width: 650px) {
    border-bottom: none;
  }
`

export const Avatar = styled.div`
  flex: 1;
  height: 80px;
  width: 80px;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`
