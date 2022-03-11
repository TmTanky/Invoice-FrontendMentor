import React from 'react'
import ReactDOM from 'react-dom'
import { S } from './Popup.styles'

export const Popup = () => {
  return ReactDOM.createPortal(
    <S.Container>
      <h1> Are you sure? </h1>
      <S.ButtonGroup>
        <button type='button'> Cancel </button>
        <button type='button'> Delete </button>
      </S.ButtonGroup>
    </S.Container>,
    document.body
  )
}
