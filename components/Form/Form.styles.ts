import styled from 'styled-components'

export const Container = styled.div`
  /* background-color: rgb(20, 22, 37); */
  background-color: blue;
  z-index: 1;
  position: absolute;
  height: 100vh;
  min-width: 400px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;

  .user {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    min-width: 500px;
    margin: 60px 40px 40px 120px;
    color: white;

    h1 {
      margin-bottom: 20px;
    }

    label {
      margin: 15px 0;
      font-size: 14px;
    }

    input {
      padding: 13px;
      background-color: rgb(30, 33, 57);
      border-radius: 5px;
      outline: none;
      border: none;
      color: white;
      font-weight: 600;
      border: 1px solid rgb(37, 41, 69);
    }
  }
`
