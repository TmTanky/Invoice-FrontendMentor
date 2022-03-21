/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from 'nanoid'
import { ScopedMutator } from 'swr/dist/types'
import { toast } from 'react-toastify'

export const createOrEditInvoice = (
  type: 'edit' | 'create',
  routeID: string,
  revalidate: ScopedMutator<any>,
  ids?: { id: string; listId: string }
) => {
  return async (values: any, { resetForm, setValues }: any) => {
    const data = await (
      await fetch('/api/submit', {
        method: type === 'edit' ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:
          type === 'edit'
            ? JSON.stringify({
                ...values,
                userID: ids?.id,
                listID: ids?.listId
              })
            : JSON.stringify(values)
      })
    ).json()
    if (data.message === ('success' || 'edit success')) {
      resetForm()
      setValues({
        id: nanoid(6).toUpperCase(),
        fullName: '',
        email: '',
        city: '',
        country: '',
        streetAddress: '',
        zipCode: '',
        status: 'pending',
        list: {
          createdAt: '',
          items: [
            {
              id: nanoid(6).toUpperCase(),
              price: '',
              qty: '',
              name: ''
            }
          ]
        }
      })
    }
    revalidate(
      type === 'edit' ? `/api/getInvoice/${routeID}` : '/api/getInvoices'
    )
    toast(type === 'create' ? 'Invoice Submitted' : 'Edit Success', {
      autoClose: 3000,
      position: 'bottom-right',
      style: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      draggable: true,
      progressStyle: {
        backgroundColor: 'rgb(20, 22, 37)'
      }
    })
  }
}
