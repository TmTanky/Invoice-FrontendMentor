/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, MouseEvent, useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { mutate } from 'swr'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { Formik, Field, Form as FormMan, FieldArray } from 'formik'
import { useTheme } from 'styled-components'
import Select from 'react-select'
import { ErrorMsg } from '@/components/ErrorMsg'
import { FormContext, FormContextType } from '../../contexts'
import {
  validate,
  initialValues,
  createOrEditInvoice,
  firstLetterUppercase
} from '../../utils'
import * as S from './Form.styles'
import 'react-toastify/dist/ReactToastify.css'

// const options = [
//   { value: 'paid', label: 'Paid' },
//   { value: 'pending', label: 'Pending' },
//   { value: 'draft', label: 'Draft' }
// ]

type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ setShowForm }: FormProps) => {
  const theme = useTheme()
  const router = useRouter()
  const { editForm, id, setId, setListId, listId } =
    useContext<FormContextType>(FormContext)

  const close = () => {
    if (id) {
      setId('')
      setListId('')
      setShowForm((prev) => !prev)
      return
    }
    setShowForm((prev) => !prev)
  }

  const revalidate = () => {
    return mutate
  }

  return (
    <S.Container
      key='container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <div
        aria-hidden='true'
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className='form'
      >
        <S.TheForm
          key='modal'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
        >
          <Formik
            initialValues={id ? editForm : initialValues}
            onSubmit={createOrEditInvoice(
              id ? 'edit' : 'create',
              router.query.id as string,
              revalidate(),
              {
                id,
                listId
              }
            )}
            validate={validate}
          >
            {({ values }) => (
              <FormMan>
                <div className='user'>
                  <h1> {id ? 'Edit' : 'Create'} Invoice </h1>
                  <p> User </p>
                  <label htmlFor='fullName'> Full Name </label>
                  <ErrorMsg name='fullName' />
                  <Field type='text' name='fullName' />
                  <label htmlFor='email'> Email Address </label>
                  <ErrorMsg name='email' />
                  <Field type='email' name='email' />
                </div>
                <div className='address'>
                  <p> Address </p>
                  <label htmlFor='address'> Street Address </label>
                  <ErrorMsg name='streetAddress' />
                  <Field name='streetAddress' />
                  <label htmlFor='city'> City </label>
                  <ErrorMsg name='city' />
                  <Field name='city' />
                  <label htmlFor='state'> Country </label>
                  <ErrorMsg name='country' />
                  <Field name='country' />
                  <label htmlFor='zip'> Zip Code </label>
                  <ErrorMsg name='zipCode' />
                  <Field name='zipCode' />
                </div>
                <FieldArray name='list.items'>
                  {({ remove, push }) => (
                    <ul className='item-list'>
                      <p> Item List </p>
                      {values.list.items.map((list, index) => (
                        <div key={list.id} className='item'>
                          <div className='name'>
                            <label htmlFor='name'> Name </label>
                            <ErrorMsg name={`list.items[${index}].name`} />
                            <Field name={`list.items[${index}].name`} />
                          </div>
                          <div className='other-info'>
                            <div className='qty'>
                              <label htmlFor='qty'> Qty </label>
                              <ErrorMsg name={`list.items[${index}].qty`} />
                              <Field
                                error='asdfasdf'
                                type='number'
                                name={`list.items[${index}].qty`}
                              />
                            </div>
                            <div className='price'>
                              <label htmlFor='price'> Price </label>
                              <ErrorMsg name={`list.items[${index}].price`} />
                              <Field
                                type='number'
                                name={`list.items[${index}].price`}
                              />
                            </div>
                            <div className='delete'>
                              <AiFillDelete
                                style={{ cursor: 'pointer' }}
                                size={20}
                                onClick={() => remove(index)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        type='button'
                        onClick={() =>
                          push({
                            name: '',
                            qty: '',
                            price: '',
                            id: nanoid(6).toUpperCase()
                          })
                        }
                      >
                        Add Item
                      </button>
                    </ul>
                  )}
                </FieldArray>
                {id && listId && (
                  <Field className='select-status' as='select' name='status'>
                    <option value='draft'> Draft </option>
                    <option value='pending'> Pending </option>
                    <option value='paid'> Paid </option>
                  </Field>
                )}
                {/* <Select
                  isSearchable={false}
                  placeholder={firstLetterUppercase(values.status)}
                  options={options}
                  className='select-status'
                  styles={{
                    option: (provided) => ({
                      ...provided,
                      backgroundColor:
                        theme.theme === 'dark' ? 'rgb(30, 33, 57)' : 'white',
                      color:
                        theme.theme === 'light' ? 'rgb(30, 33, 57)' : 'white'
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
                      color:
                        theme.theme === 'light' ? 'rgb(30, 33, 57)' : 'white'
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color:
                        theme.theme === 'light' ? 'rgb(30, 33, 57)' : 'white'
                    })
                  }}
                /> */}
                <div className='button-group'>
                  <button onClick={close} className='discard' type='button'>
                    Discard
                  </button>
                  <button
                    disabled={!values && true}
                    className='create'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </FormMan>
            )}
          </Formik>
        </S.TheForm>
      </div>
    </S.Container>
  )
}
