type ValuesProps = {
  fullName: string
  email: string
  streetAddress: string
  city: string
  country: string
  zipCode: string
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
  return errors
}
