import React from 'react'
import { ErrorMessage } from 'formik'
import styled from 'styled-components'

export const ErrorTag = styled.p`
  font-size: 13px;
  margin-bottom: 5px;
  color: #ff3b3b;
`

export const ErrorMsg = ({ name }: { name: string }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <ErrorTag>{msg}</ErrorTag>}
    </ErrorMessage>
  )
}
