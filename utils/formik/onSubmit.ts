import { nanoid } from 'nanoid'
import { mutate } from 'swr'
import { toast } from 'react-toastify'

export const onSubmitObject = async (values: any, { resetForm, setValues }: any) => {
  const data = await (
    await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
  ).json()
  if (data.message === 'success') {
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
    mutate('/api/getInvoices')
  }
  toast('Invoice Submitted', {
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
