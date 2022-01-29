/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import * as S from './Form.styles'

export const Form = () => {
  return (
    <S.Container>
      <div className='user'>
        <h1> Create Invoice </h1>
        <label htmlFor='fullName'> Full Name </label>
        <input type='text' name='' id='' />
        <label htmlFor="email"> Email Address </label>
        <input type='text' name='' id='' />
      </div>
    </S.Container>
  )
}
