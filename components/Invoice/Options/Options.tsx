import React from 'react'
import * as S from './Options.styles'

export const Options = () => {
  return (
    <S.Container>
      <button id='edit' type='button'> Edit </button>
      <button id='delete' type='button'> Delete </button>
    </S.Container>
  )
}
