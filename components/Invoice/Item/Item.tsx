import React from 'react'
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'
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
  const navigateToInvoice = () => router.push(`/invoice/${id}`)

  return (
    <S.Container onClick={navigateToInvoice}>
      <S.Upper>
        <p className='invoice-id'>
          #<span>{id}</span>
        </p>
        <p className='due-date'> {dueDate} </p>
        <ReactTooltip backgroundColor='white' textColor='black' />
        <p data-tip={name} className='name'>
          {name.length >= 15 ? `${name.slice(0, 15)}...` : name}
        </p>
      </S.Upper>
      <S.Lower>
        <p className='amount'> ${total} </p>
        <Button status={status}> {status.toUpperCase()} </Button>
      </S.Lower>
    </S.Container>
  )
}
