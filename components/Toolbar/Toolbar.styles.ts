import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100px;
  margin-top: 100px;
  margin-bottom: 20px;

  .info {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    p.total-invoice {
      font-size: 13px;
    }
  }

  .options {
    flex: 1;
    display: flex;

    .select {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .select-status {
        width: 200px;
      }
    }
    .add {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10px;

      button {
        background-color: rgb(124, 93, 250);
        color: white;
        font-weight: 700;
        outline: none;
        border: none;
        width: fit-content;
        height: 40px;
        padding: 0 15px;
        border-radius: 25px;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 300px) and (max-width: 650px) {
    flex-direction: column;

    .options {
      padding: 10px 0;
    }

    .add {
      align-items: flex-end;
      padding: 0;
    }
  }
`
