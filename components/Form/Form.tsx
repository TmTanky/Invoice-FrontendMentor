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
          <p> User </p>
          <label htmlFor='fullName'> Full Name </label>
          <input type='text' name='' id='' />
          <label htmlFor='email'> Email Address </label>
          <input type='text' name='' id='' />
        </div>
        <div className='address'>
          <p> Address </p>
          <label htmlFor='address'> Street Address </label>
          <input type='text' name='' id='' />
          <label htmlFor='city'> City </label>
          <input type='text' name='' id='' />
          <label htmlFor='state'> Country </label>
          <input type='text' name='' id='' />
          <label htmlFor='zip'> Zip Code </label>
          <input type='text' name='' id='' />
        </div>
        <div className='button-group'>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className='discard'
            type='button'
          >
            Discard
          </button>
          <button className='create' type='button'>
            Create
          </button>
        </div>
      </div>
    </S.Container>
  )
}
