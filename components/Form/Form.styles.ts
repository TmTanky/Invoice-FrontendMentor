import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`

export const TheForm = styled(motion.div)`
  position: fixed;
  z-index: 30;
  top: 0;
  /* left: -800px; */
  left: 80px;
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: 100%;
  height: 100%;
  max-width: 650px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow-y: scroll;
  cursor: default;

  input {
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    border: ${({ theme }) =>
        theme.theme === 'light' ? 'rgb(223, 227, 250)' : 'rgb(37, 41, 69)'}
      solid 1px;
    background-color: ${({ theme }) => theme.bgColor.secondary};
    color: ${({ theme }) => theme.fontColor.default};

    &:focus {
      border: 1px solid rgb(146, 119, 255);
    }
  }

  .user,
  .address {
    z-index: 40;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 60px 50px;
    color: ${({ theme }) => theme.fontColor.default};

    h1 {
      margin-bottom: 20px;
    }

    label {
      margin: 15px 0;
      font-size: 14px;
    }

    @media screen and (max-width: 650px) {
      margin: 80px 20px 40px 20px;
    }
  }

  .address {
    @media screen and (max-width: 650px) {
      margin: 20px 20px 40px 20px;
    }
  }

  .button-group {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 50px 40px 50px;
    color: white;

    button {
      padding: 0.8rem 1.5rem;
      color: white;
      font-weight: 600;
      border-radius: 25px;
      border: none;
      outline: none;
      cursor: pointer;

      &.discard {
        background-color: rgb(30, 33, 57);
      }

      &.create {
        background-color: rgb(124, 93, 250);

        &:disabled {
          opacity: 0.5;
        }
      }
    }

    @media screen and (max-width: 650px) {
      margin: 0px 20px 40px 20px;
    }
  }

  .item-list {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 50px 40px 50px;
    color: ${({ theme }) => theme.fontColor.default};

    p {
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      padding: 0.8rem 1.5rem;
      color: white;
      font-weight: 600;
      border-radius: 25px;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: rgb(124, 93, 250);
      margin-top: 10px;
    }

    input {
      margin: 10px 0;
    }

    label {
      font-size: 14px;
    }

    .item {
      display: flex;

      .name {
        flex: 2;
        display: flex;
        flex-direction: column;
      }

      .other-info {
        flex: 1;
        display: flex;

        .qty,
        .price {
          flex: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          input {
            width: 85%;
          }
        }

        .delete {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      @media screen and (max-width: 650px) {
        flex-direction: column;

        .other-info {
          .qty,
          .price {
            align-items: flex-start;
            justify-content: flex-start;

            input {
              width: 100px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 650px) {
      margin: 0px 20px 40px 20px;
    }
  }

  .select-status {
    margin: 0 50px 40px 50px;

    @media screen and (max-width: 650px) {
      margin: 0px 20px 40px 20px;
    }
  }

  @media screen and (max-width: 800px) {
    left: 0;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    h1 {
      margin-top: 80px;
    }
  }
`
