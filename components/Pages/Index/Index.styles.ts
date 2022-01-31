import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(20, 22, 37);

  .left {
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
  }

  .right {
    flex: 16;
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 10px 20px;
  }

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;
  }
`
