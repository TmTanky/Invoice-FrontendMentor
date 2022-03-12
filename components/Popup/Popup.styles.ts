import styled from 'styled-components'

export const S = {
  Container: styled.dialog`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      background-color: ${({ theme }) => theme.bgColor.secondary};
      color: ${({ theme }) => theme.fontColor.default};
      height: 200px;
      width: 300px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-around;

    > button {
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
      margin-top: 30px;
      font-size: 12px;

      &#delete {
        background-color: rgb(236, 87, 87);
      }
    }
  `
}
