/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, MouseEvent, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { nanoid } from 'nanoid'
import { Input } from '../Input'
import * as S from './Form.styles'

type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ setShowForm }: FormProps) => {
  const [list, setList] = useState<string[]>(['a'])

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
          <Input type='text' name='' id='' />
          <label htmlFor='email'> Email Address </label>
          <Input type='text' name='' id='' />
        </div>
        <div className='address'>
          <p> Address </p>
          <label htmlFor='address'> Street Address </label>
          <Input type='text' name='' id='' />
          <label htmlFor='city'> City </label>
          <Input type='text' name='' id='' />
          <label htmlFor='state'> Country </label>
          <Input type='text' name='' id='' />
          <label htmlFor='zip'> Zip Code </label>
          <Input type='text' name='' id='' />
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
        <div className='item-list'>
          <p> Item List </p>
          {list.map(() => {
            return (
              <div key={nanoid(5)} className='item'>
                <div className='name'>
                  <label htmlFor='name'> Name </label>
                  <Input type='text' />
                </div>
                <div className='other-info'>
                  <div className='qty'>
                    <label htmlFor='qty'> Qty </label>
                    <Input type='number' />
                  </div>
                  <div className='price'>
                    <label htmlFor='price'> Price </label>
                    <Input type='number' />
                  </div>
                  <div className='delete'>
                    <AiFillDelete size={20} />
                  </div>
                </div>
              </div>
            )
          })}
          <button
            onClick={() => {
              setList((prev) => [...prev, 'a'])
            }}
            type='button'
          >
            Add Item
          </button>
        </div>
      </div>
    </S.Container>
  )
}
