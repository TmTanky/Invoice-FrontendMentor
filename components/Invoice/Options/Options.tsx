import React, { useContext, useState } from 'react'
import { Popup } from '@/components/Popup'
import { InvoiceType } from '@/types/interfaces'
import { FormContext, FormContextType } from '../../../contexts'
import * as S from './Options.styles'

type OptionsProps = {
  id: string
  listID: string
  invoice: InvoiceType
}

export const Options = ({ id, listID, invoice }: OptionsProps) => {
  const [confirm, setConfirm] = useState(false)
  const { setShowForm, setId, setEditForm, setListId } =
    useContext<FormContextType>(FormContext)

  const confirmPopup = async () => {
    setConfirm((prev) => !prev)
  }

  const editHandler = () => {
    setId(id)
    setListId(listID)
    setShowForm((prev) => !prev)
    setEditForm({
      id: invoice.id,
      city: invoice.city,
      country: invoice.country,
      email: invoice.email,
      fullName: invoice.fullName,
      streetAddress: invoice.streetAddress,
      zipCode: invoice.zipCode,
      status: invoice.status,
      list: {
        createdAt: invoice.list.createdAt,
        items: invoice.list.items.list
      }
    })
  }

  return (
    <S.Container>
      <button
        data-testid='edit-btn'
        onClick={editHandler}
        id='edit'
        type='button'
      >
        Edit
      </button>
      <button
        data-testid='confirm-btn'
        onClick={confirmPopup}
        id='delete'
        type='button'
      >
        Delete
      </button>
      {confirm && <Popup id={id} listID={listID} setConfirm={setConfirm} />}
    </S.Container>
  )
}
