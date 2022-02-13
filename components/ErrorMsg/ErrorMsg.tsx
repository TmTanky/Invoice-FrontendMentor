import React from 'react'
import { ErrorMessage } from 'formik'
import styled from 'styled-components'

export const ErrorTag = styled.span`
  font-size: 13px;
  margin-bottom: 5px;
  color: #ff3b3b;
`

export const ErrorMsg = ({ name }: { name: string }) => {
  return (
    <ErrorMessage className='field-error' name={name}>
      {(msg) => <ErrorTag>{msg}</ErrorTag>}
    </ErrorMessage>
  )
}
