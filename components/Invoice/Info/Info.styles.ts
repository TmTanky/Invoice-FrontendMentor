import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  width: 100%;
  max-width: 700px;
  background-color: rgb(30, 33, 57);
  margin: 0 15px;
  margin-top: 20px;
  padding: 1.5rem;
  height: max-content;
  border-radius: 5px;
  position: relative;

  .upper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
      display: flex;
      align-items: flex-end;
    }
  }

  .middle {
    display: flex;
    margin-bottom: 60px;

    p {
      margin-bottom: 8px;
    }

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .right {
      flex: 1;
      display: flex;
      align-items: flex-end;
    }

    @media screen and (min-width: 300px) and (max-width: 650px) {
      flex-direction: column;
      .right {
          margin-top: 10px;
        align-items: flex-start;
      }
    }
  }

  .lower {
    background-color: rgb(37, 41, 69);
    padding: 1.5rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .name-list {
      display: flex;

      .left {
        flex: 1;
        display: flex;
        flex-direction: row;

        .name {
          flex: 1;
        }

        .qty {
          flex: 1;
          display: flex;
          justify-content: center;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: row;

        .price {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .total {
          flex: 1;
          display: flex;
          justify-content: center;
        }
      }
    }

    .items {
      padding: 0.5rem 0;

      .item {
        display: flex;
        padding: 0.5rem 0;

        .left {
          flex: 1;
          display: flex;
          flex-direction: row;

          .name {
            flex: 1;
          }

          .qty {
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: row;

          .price {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          .total {
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
      }
    }

    @media screen and (min-width: 300px) and (max-width: 650px) {
      .name-list {
        .left {
          .qty {
            display: none;
          }
        }

        .right {
          .price {
            display: none;
          }
          .total {
            justify-content: flex-end;
          }
        }
      }

      .items {
        .item {
          .left {
            .qty {
              display: none;
            }
          }

          .right {
            .price {
              display: none;
            }
            .total {
              justify-content: flex-end;
            }
          }
        }
      }
    }
  }

  .total-amount {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: rgb(20, 22, 37);
  }
`
