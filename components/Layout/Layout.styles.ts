import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(20, 22, 37);

  .left {
    position: sticky;
    top: 0;
    flex: 1;
    width: 100%;
    display: flex;
  }

  .right {
    flex: 16;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;
  }
`
