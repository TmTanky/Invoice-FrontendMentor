import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100px;
  /* margin-top: 50px; */
  .info {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    p.total-invoice {
        font-size: 13px;
    }
  }
  .select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
  }
  .add {
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
`
