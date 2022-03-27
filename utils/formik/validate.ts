export type ValuesProps = {
  id: string
  fullName: string
  email: string
  streetAddress: string
  city: string
  country: string
  zipCode: string
  status: string
  list: {
    createdAt: string
    items: {
      id: string
      name: string | number
      qty: string | number
      price: string | number
    }[]
  }
}

export const validate = (values: ValuesProps) => {
  const errors = {} as { [key: string]: string }
  if (!values.fullName) {
    errors.fullName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.streetAddress) {
    errors.streetAddress = 'Required'
  }
  if (!values.city) {
    errors.city = 'Required'
  }
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.zipCode) {
    errors.zipCode = 'Required'
  }
  if (values.list.items.length === 0) {
    errors.list = 'Required'
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listErrors: any = []
    values.list.items.forEach((item, index) => {
      const itemErrors = {} as { [key: string]: string }
      if (!item.name) {
        itemErrors.name = 'Required'
      }
      if (!item.qty) {
        itemErrors.qty = 'Required'
      }
      if (!item.price) {
        itemErrors.price = 'Required'
      }
      if (Object.keys(itemErrors).length) {
        listErrors[index] = itemErrors
      }
    })
    if (listErrors.length) {
      errors.list = listErrors
    }
  }
  return errors
}
