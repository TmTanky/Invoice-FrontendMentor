import styled from 'styled-components'

export const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  padding: 10px 20px;
  margin-bottom: 100px;

  > ul {
    width: 100%;
    > li {
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  p.no-invoice {
    margin-top: 50px;
    font-weight: 500;
    color: ${({ theme }) => theme.fontColor.default};
  }
`
