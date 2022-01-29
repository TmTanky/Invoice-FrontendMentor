import React from 'react'
import Select from 'react-select'
import * as S from './Toolbar.styles'

const options = [
  { value: 'paid', label: 'Paid' },
  { value: 'pending', label: 'Pending' },
  { value: 'draft', label: 'Draft' }
]

type ToolbarProps = {
  invoiceTotal: number
}

export const Toolbar = ({ invoiceTotal }: ToolbarProps) => {
  return (
    <S.Container>
      <div className='info'>
        <h1> Invoices </h1>
        <p className='total-invoice'>
          There are {invoiceTotal} total invoices.
        </p>
      </div>
      <div className='select'>
        <Select
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
          options={options}
        />
      </div>
      <div className='add'>
        <button type='button'> New Invoice </button>
      </div>
    </S.Container>
  )
}
