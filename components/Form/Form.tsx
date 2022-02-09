/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  Dispatch,
  SetStateAction,
  MouseEvent
  // useState
} from 'react'
// import { AiFillDelete } from 'react-icons/ai'
// import { nanoid } from 'nanoid'
// import { Input } from '../Input'
import { Formik, Field, Form as FormMan } from 'formik'
import * as S from './Form.styles'
// import { Items } from '../../types/types'

type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const Form = ({ setShowForm }: FormProps) => {
  // const [list, setList] = useState<string[]>([])
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   streetAddress: '',
  //   city: '',
  //   country: '',
  //   zipCode: ''
  // })
  // const [itemList, setItemsList] = useState<Items[]>([])

  // const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <S.Container onClick={() => setShowForm((prev) => !prev)}>
      <div
        aria-hidden='true'
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className='form'
      >
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            streetAddress: '',
            city: '',
            country: '',
            zipCode: ''
          }}
          onSubmit={async (values) => {
            console.log(values)
          }}
        >
          <FormMan>
            <div className='user'>
              <h1> Create Invoice </h1>
              <p> User </p>
              <label htmlFor='fullName'> Full Name </label>
              <Field name='fullName' />
              <label htmlFor='email'> Email Address </label>
              <Field name='email' />
            </div>
            <div className='address'>
              <p> Address </p>
              <label htmlFor='address'> Street Address </label>
              <Field name='streetAddress' />
              <label htmlFor='city'> City </label>
              <Field name='city' />
              <label htmlFor='state'> Country </label>
              <Field name='country' />
              <label htmlFor='zip'> Zip Code </label>
              <Field name='zipCode' />
            </div>
            <div className='button-group'>
              <button
                onClick={() => setShowForm((prev) => !prev)}
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
        </Formik>
        {/* <div className='item-list'>
          <p> Item List </p>
          {list.map((key) => {
            return (
              <div key={key} className='item'>
                <div className='name'>
                  <label htmlFor='name'> Name </label>
                  <Input
                    type='text'
                    name={`name-${key}`}
                  />
                </div>
                <div className='other-info'>
                  <div className='qty'>
                    <label htmlFor='qty'> Qty </label>
                    <Input
                      minLength={1}
                      maxLength={2}
                      min={1}
                      max={99}
                      name={`qty-${key}`}
                    />
                  </div>
                  <div className='price'>
                    <label htmlFor='price'> Price </label>
                    <Input
                      minLength={1}
                      maxLength={2}
                      min={1}
                      max={99}
                      name={`price-${key}`}
                    />
                  </div>
                  <div className='delete'>
                    <AiFillDelete
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setList((prev) => prev.filter((item) => item !== key))
                      }}
                      size={20}
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <button
            onClick={() => {
              setList((prev) => [...prev, nanoid(10)])
            }}
            type='button'
          >
            Add Item
          </button>
        </div> */}
        {/* <div className='button-group'>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className='discard'
            type='button'
          >
            Discard
          </button>
          <button className='create' type='button'>
            Create
          </button>
        </div> */}
      </div>
    </S.Container>
  )
}
