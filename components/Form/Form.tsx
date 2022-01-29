/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, MouseEvent } from 'react'
import * as S from './Form.styles'

type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ setShowForm }: FormProps) => {
  return (
    <S.Container onClick={() => setShowForm((prev) => !prev)}>
      <div
        aria-hidden='true'
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className='form'
      >
        <div className='user'>
          <h1> Create Invoice </h1>
          <label htmlFor='fullName'> Full Name </label>
          <input type='text' name='' id='' />
          <label htmlFor='email'> Email Address </label>
          <input type='text' name='' id='' />
        </div>
      </div>
    </S.Container>
  )
}
