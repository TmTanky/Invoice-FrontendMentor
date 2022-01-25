import React from 'react'
import { Button } from '../Button'
import * as S from './InvoiceItem.styles'

type InvoiceItemProps = {
  id: string
  dueDate: string
  name: string
  total: number
  status: 'paid' | 'pending' | 'draft'
}

export const InvoiceItem = ({
  id,
  dueDate,
  name,
  total,
  status
}: InvoiceItemProps) => {
  return (
    <S.Container>
      <S.Upper>
        <p className='invoice-id'>
          #<span>{id}</span>
        </p>
        <p className='due-date'> {dueDate} </p>
        <p className='name'> {name} </p>
      </S.Upper>
      <S.Lower>
        <p className='amount'> ${total} </p>
        <Button status={status}> {status.toUpperCase()} </Button>
      </S.Lower>
    </S.Container>
  )
}
