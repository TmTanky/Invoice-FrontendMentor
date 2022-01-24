import React from 'react'
import { Button } from '../Button'
import * as S from './InvoiceItem.styles'

export const InvoiceItem = () => {
  return (
    <S.Container>
      <S.Upper>
        <p className='invoice-id'>
          #<span>XM9141</span>
        </p>
        <p className='due-date'> Due 01 Oct 2021 </p>
        <p className='name'> John Cena </p>
      </S.Upper>
      <S.Lower>
        <p className='amount'> $481 </p>
        <Button status='paid'> Paid </Button>
      </S.Lower>
    </S.Container>
  )
}
