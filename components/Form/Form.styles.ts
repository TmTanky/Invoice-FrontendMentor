import styled from 'styled-components'

export const Container = styled.div`
  /* background-color: rgb(30, 33, 57); */
  z-index: 1;
  background-color: red;
  position: absolute;
  height: 100vh;
  min-width: 400px;
  
  .user {
      display: flex;
      flex-direction: column;
      margin-left: 80px;
      background-color: blue;
      min-width: 500px;
  }
`
