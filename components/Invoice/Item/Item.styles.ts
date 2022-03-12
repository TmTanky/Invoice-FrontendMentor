import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.bgColor.secondary};
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100%;
  min-height: 80px;
  max-height: 80px;
  border: solid 1px transparent;
  border-radius: 8px;
  overflow: hidden;
  color: ${({ theme }) => theme.fontColor.default};
  padding: 10px 0;
  cursor: pointer;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    min-height: 110px;
  }

  &:hover {
    border-color: rgb(124, 93, 250);
  }
`

export const Upper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${({ theme }) => theme.fontColor.default};

  p {
    margin: 0 10px;
    &.invoice-id {
      font-weight: 700;
      color: #7e88c3;
      span {
        color: ${({ theme }) => theme.fontColor.default};
      }
    }

    &.due-date,
    &.name {
      font-weight: 300;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {
    align-items: baseline;
    flex-direction: column;
    justify-content: center;

    p.invoice-id {
      margin-bottom: 10px;
      font-weight: 700;
      color: #7e88c3;
      span {
        color: ${({ theme }) => theme.fontColor.default};
      }
    }
  }
`

export const Lower = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.fontColor.default};

  p {
    &.amount {
      font-weight: 700;
      color: ${({ theme }) => theme.fontColor.default};
    }
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 20px;

    p.amount {
      margin-bottom: 10px;
    }
  }
`
