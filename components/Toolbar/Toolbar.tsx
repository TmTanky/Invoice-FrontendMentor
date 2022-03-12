import React, { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { useTheme } from 'styled-components'
import * as S from './Toolbar.styles'

const options = [
  { value: 'all', label: 'All' },
  { value: 'paid', label: 'Paid' },
  { value: 'pending', label: 'Pending' },
  { value: 'draft', label: 'Draft' }
]

type ToolbarProps = {
  invoiceTotal: number
  setShowForm: Dispatch<SetStateAction<boolean>>
  setFilter: Dispatch<SetStateAction<string>>
}

export const Toolbar = ({
  invoiceTotal,
  setShowForm,
  setFilter
}: ToolbarProps) => {
  const theme = useTheme()
  const toggleForm = () => setShowForm((prev) => !prev)

  return (
    <S.Container>
      <div className='info'>
        <h1> Invoices </h1>
        <p className='total-invoice'>
          There are {invoiceTotal} total invoices.
        </p>
      </div>
      <div className='options'>
        <div className='select'>
          <Select
            onChange={(e) => setFilter(e!.value)}
            placeholder='Filter by status'
            styles={{
              option: (provided) => ({
                ...provided,
                backgroundColor:
                  theme.theme === 'dark' ? 'rgb(30, 33, 57)' : 'white',
                color: theme.theme === 'light' ? 'rgb(30, 33, 57)' : 'white'
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor:
                  theme.theme === 'dark' ? 'rgb(30, 33, 57)' : 'white',
                border: 'none',
                outline: 'none'
              }),
              menuList: (provided) => ({
                ...provided,
                backgroundColor:
                  theme.theme === 'dark' ? 'rgb(30, 33, 57)' : 'white'
              }),
              placeholder: (provided) => ({
                ...provided,
                color: theme.theme === 'light' ? 'rgb(30, 33, 57)' : 'white'
              })
            }}
            className='select-status'
            options={options}
          />
        </div>
        <div className='add'>
          <button onClick={toggleForm} type='button'>
            +
          </button>
        </div>
      </div>
    </S.Container>
  )
}
