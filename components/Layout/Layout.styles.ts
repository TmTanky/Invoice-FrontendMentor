import styled from 'styled-components'

export const RootContainer = styled.div`
  background-color: rgb(20, 22, 37);
  display: flex;
  height: 100%;

  .first-section {
    width: 90px;
  }

  .second-section {
    width: 100%;
  }

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;
  }
`
