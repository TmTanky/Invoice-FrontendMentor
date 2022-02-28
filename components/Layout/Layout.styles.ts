import styled from 'styled-components'

export const RootContainer = styled.div`
  background-color: ${({ theme }) => theme.bgColor.primary};
  display: flex;
  height: 100%;

  .first-section {
    width: 90px;
  }

  .second-section {
    width: 100%;
  }

  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
  }
`
