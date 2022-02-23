/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'
import { ValuesProps } from 'utils'

export const FormContext = createContext(undefined) as undefined | any

type FormContextProps = {
  children: ReactNode
}

export type FormContextType = {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
  editForm: ValuesProps
  setEditForm: Dispatch<SetStateAction<ValuesProps>>
  id: string
  setId: Dispatch<SetStateAction<string>>
  listId: string
  setListId: Dispatch<SetStateAction<string>>
}

export const FormProvider = ({ children }: FormContextProps) => {
  const [id, setId] = useState('')
  const [listId, setListId] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState({
    id: '',
    fullName: '',
    email: '',
    streetAddress: '',
    city: '',
    country: '',
    zipCode: '',
    status: 'pending',
    list: {
      createdAt: '',
      items: [
        {
          id: '',
          name: '',
          qty: '',
          price: ''
        }
      ]
    }
  })

  return (
    <FormContext.Provider
      value={{
        showForm,
        setShowForm,
        editForm,
        setEditForm,
        setId,
        id,
        listId,
        setListId
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
