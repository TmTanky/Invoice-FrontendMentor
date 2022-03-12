import React, { useContext, useState } from 'react'
import { FormContext, FormContextType } from 'contexts'
import { Popup } from '@/components/Popup'
import { InvoiceType } from '@/types/interfaces'
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
      list: {
        createdAt: invoice.list.createdAt,
        items: invoice.list.items.list
      }
    })
  }

  return (
    <S.Container>
      <button onClick={editHandler} id='edit' type='button'>
        Edit
      </button>
      <button onClick={confirmPopup} id='delete' type='button'>
        Delete
      </button>
      {confirm && <Popup id={id} listID={listID} setConfirm={setConfirm} />}
    </S.Container>
  )
}
