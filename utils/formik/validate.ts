type ValuesProps = {
  fullName: string
  email: string
  streetAddress: string
  city: string
  country: string
  zipCode: string
  list: {
    name: string | number
    qty: string | number
    price: string | number
  }[]
}

export const validate = (values: ValuesProps) => {
  const errors: any = {}
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
  // check if all items in list are empty
  if (values.list.length === 0) {
    errors.list = 'Required'
  } else {
    // check if all items in list are filled
    const listErrors: any = []
    values.list.forEach((item, index) => {
      const itemErrors: any = {}
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
