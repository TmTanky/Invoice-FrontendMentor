import React, { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
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
                backgroundColor: 'rgb(30, 33, 57)',
                color: 'white'
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: 'rgb(30, 33, 57)',
                border: 'none',
                outline: 'none'
              }),
              menuList: (provided) => ({
                ...provided,
                backgroundColor: 'rgb(30, 33, 57)'
              }),
              placeholder: (provided) => ({
                ...provided,
                color: 'white'
              })
            }}
            className='select-status'
            options={options}
          />
        </div>
        <div className='add'>
          <button onClick={() => setShowForm((prev) => !prev)} type='button'>
            +
          </button>
        </div>
      </div>
    </S.Container>
  )
}
