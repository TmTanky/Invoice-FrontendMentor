import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  background-color: rgb(30, 33, 57);

  .left {
    flex: 1;
    width: 100%;
    display: flex;
  }

  .right {
    flex: 16;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;
  }
`
