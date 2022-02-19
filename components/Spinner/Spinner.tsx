import styled from 'styled-components'

export const LoadingSpinner = styled.div`
  height: 40px;
  width: 40px;
  border: 4px solid rgb(30, 33, 57);
  border-top: 4px solid white;
  border-radius: 25px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 1s linear infinite;
`
