import React from 'react'
import * as S from './Info.styles'
import { InvoiceType } from '../../../types/interfaces'

type InfoProps = {
  invoice: InvoiceType
}

export const Info = ({ invoice: { id, user, dueDate, items } }: InfoProps) => {
  const { address, email } = user

  return (
    <S.Container>
      <div className='upper'>
        <div className='left'>
          <h2> #{id} </h2>
        </div>
        <div className='right'>
          <p> {address.street} </p>
          <p> {address.city} </p>
          <p> {address.country} </p>
          <p> {address.postCode} </p>
        </div>
      </div>

      <div className='middle'>
        <div className='left'>
          <p> Payment Due </p>
          <h2> {dueDate} </h2>
        </div>
        <div className='right'>
          <p> Sent to </p>
          <h2> {email} </h2>
        </div>
      </div>

      <div className='lower'>
        <div className='items'>
          {items.map((item) => {
            return (
              <div className='item' key={item.id}>
                <div className='left'>
                  <div className='name'>
                    <p> {item.name} </p>
                  </div>
                  <div className='qty'>
                    <p> {item.qty} </p>
                  </div>
                </div>
                <div className='right'>
                  <div className='price'>
                    <p> {item.price} </p>
                  </div>
                  <div className='total'>
                    <p> {item.total} </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </S.Container>
  )
}
