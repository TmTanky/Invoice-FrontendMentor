import styled from 'styled-components'

export const RootContainer = styled.div`
  /* display: flex;
  justify-content: center;
  min-height: 100vh; */
  /* width: 100%; */
  background-color: rgb(20, 22, 37);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
/* 
  .right {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 0 10px;
  } */

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;
  }
`
