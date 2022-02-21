import React from 'react'
import { useRouter } from 'next/router'
import * as S from './Options.styles'

type OptionsProps = {
  id: string
  listID: string
}

export const Options = ({ id, listID }: OptionsProps) => {
  const router = useRouter()

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/`, {
      method: 'DELETE',
      body: JSON.stringify({ id, listID })
    })
    const { message } = (await res.json()) as { message: string }
    if (message) router.push('/')
  }

  return (
    <S.Container>
      <button id='edit' type='button'>
        Edit
      </button>
      <button onClick={deleteHandler} id='delete' type='button'>
        Delete
      </button>
    </S.Container>
  )
}
