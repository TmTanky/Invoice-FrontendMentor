import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  .form {
    position: relative;
    z-index: 30;
    background-color: rgb(20, 22, 37);
    width: 100%;
    height: 100%;
    max-width: 650px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: default;

    .user {
      z-index: 40;
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 60px 50px 40px 130px;
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
  }
`
