/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export const FormContext = createContext(undefined) as undefined | any

type FormContextProps = {
  children: ReactNode
}

export type FormContextType = {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const FormProvider = ({ children }: FormContextProps) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </FormContext.Provider>
  )
}
