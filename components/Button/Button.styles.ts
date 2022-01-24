import styled from 'styled-components'

type ButtonProps = {
  status: 'paid' | 'pending' | 'draft'
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({ })};
`
