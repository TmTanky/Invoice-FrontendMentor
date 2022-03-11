import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const [confirm, setConfirm] = useState(false)
  const { setShowForm, setId, setEditForm, setListId } =
    useContext<FormContextType>(FormContext)

  const deleteHandler = async () => {
    setConfirm((prev) => !prev)
    // const res = await fetch(`/api/delete/`, {
    //   method: 'DELETE',
    //   body: JSON.stringify({ id, listID })
    // })
    // const { message } = (await res.json()) as { message: string }
    // if (message) router.push('/')
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
      <button onClick={deleteHandler} id='delete' type='button'>
        Delete
      </button>
      {confirm && <Popup />}
    </S.Container>
  )
}
