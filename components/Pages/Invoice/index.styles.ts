import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: ${({ theme }) => theme.bgColor.primary};
  margin-bottom: 100px;

  .go-back {
    color: white;
    width: 100%;
    max-width: 700px;
    background-color: ${({ theme }) => theme.bgColor.secondary};
    margin: 0 15px;
    margin-top: 100px;
    padding: 1.5rem;
    height: max-content;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    .go-back-btn {
      border: none;
      outline: none;
      cursor: pointer;
      background-color: transparent;
      color: white;
      font-weight: 600;
    }
  }
`
