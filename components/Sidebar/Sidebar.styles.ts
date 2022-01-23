import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(55, 59, 83);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
`

export const UpperContainer = styled.div`
  flex: 2;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: rgb(124, 93, 250);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`

export const LowerContainter = styled.div`
  /* flex: 1; */
  /* background-color: red; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
`

export const ThemeToggle = styled.div`
  /* flex: 1; */
  height: 85px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px gray;
`

export const Avatar = styled.div`
  /* flex: 1; */
  height: 85px;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`
