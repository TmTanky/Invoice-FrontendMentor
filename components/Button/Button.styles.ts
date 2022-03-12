import styled from 'styled-components'
import { themeSwitcher } from '../../utils/helpers'

type ButtonProps = {
  status: 'paid' | 'pending' | 'draft'
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ status }) => themeSwitcher('bg')[status]};
  color: ${({ status }) => themeSwitcher()[status]};
  outline: none;
  border: none;
  min-width: 100px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
`
