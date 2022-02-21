import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  width: 100%;
  max-width: 700px;
  background-color: rgb(30, 33, 57);
  margin: 0 15px;
  padding: 1.5rem;
  height: max-content;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;

  button {
    width: max-content;
    padding: 0.8rem 1.5rem;
    color: white;
    font-weight: 600;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: rgb(124, 93, 250);
    margin: 0 5px;

    &#delete {
      background-color: rgb(236, 87, 87);
    }
  }
`