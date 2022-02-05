import React from 'react'
import * as S from './Info.styles'
import { InvoiceType } from '../../../types/interfaces'

type InfoProps = {
  invoice: InvoiceType
}

export const Info = ({ invoice: { id, user } }: InfoProps) => {
  const { address } = user

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
    </S.Container>
  )
}
