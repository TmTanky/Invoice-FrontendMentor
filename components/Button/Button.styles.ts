import styled from 'styled-components'
import { darkTheme } from '../../styles/theme/theme'

type ButtonProps = {
  status: 'paid' | 'pending' | 'draft'
}

export const themeSwitcher = (type?: string) => {
  if (type === 'bg') {
    return darkTheme.bgTransparent
  }
  return darkTheme.bgStatus
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ status }) => themeSwitcher('bg')[status]};
  color: ${({ status }) => themeSwitcher()[status]};
  outline: none;
  border: none;
  min-width: 80px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
`