/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, SetStateAction, MouseEvent, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AiFillDelete } from 'react-icons/ai'
import { nanoid } from 'nanoid'
import { Formik, Field, Form as FormMan, FieldArray } from 'formik'
import { ErrorMsg } from '@/components/ErrorMsg'
import { FormContext, FormContextType } from '@/contexts/formContext'
import * as S from './Form.styles'
import { validate, initialValues, onSubmitObject } from '../../utils'
import 'react-toastify/dist/ReactToastify.css'

type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ setShowForm }: FormProps) => {
  const { editForm, toBeEdited, setToBeEdited } =
    useContext<FormContextType>(FormContext)
  return (
    <AnimatePresence>
      <S.Container
        key='container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          if (toBeEdited) setToBeEdited('')
          setShowForm((prev) => !prev)
        }}
      >
        <div
          aria-hidden='true'
          onClick={(e: MouseEvent) => e.stopPropagation()}
          className='form'
        >
          <S.TheForm
            key='modal'
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ backgroundColor: 'red' }}
          >
            <Formik
              initialValues={toBeEdited ? editForm : initialValues}
              onSubmit={onSubmitObject}
              validate={validate}
            >
              {({ values }) => (
                <FormMan>
                  <div className='user'>
                    <h1> Create Invoice </h1>
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
                      <div className='item-list'>
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
                      </div>
                    )}
                  </FieldArray>
                  <div className='button-group'>
                    <button
                      onClick={() => {
                        if (toBeEdited) setToBeEdited('')
                        setShowForm((prev) => !prev)
                      }}
                      className='discard'
                      type='button'
                    >
                      Discard
                    </button>
                    <button className='create' type='submit'>
                      Create
                    </button>
                  </div>
                </FormMan>
              )}
            </Formik>
          </S.TheForm>
        </div>
      </S.Container>
    </AnimatePresence>
  )
}
