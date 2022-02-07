import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '../../Button'
import * as S from './Item.styles'

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
  const router = useRouter()

  return (
    <S.Container onClick={() => router.push(`/invoice/${id}`)}>
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
