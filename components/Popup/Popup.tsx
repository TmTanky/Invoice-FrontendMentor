import React, { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom'
import { S } from './Popup.styles'

type PopupProps = {
  setConfirm: Dispatch<SetStateAction<boolean>>
  id: string
  listID: string
}

export const Popup = ({ setConfirm, id, listID }: PopupProps) => {
  const router = useRouter()

  const cancel = () => setConfirm((prev) => !prev)
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/`, {
      method: 'DELETE',
      body: JSON.stringify({ id, listID })
    })
    const { message } = (await res.json()) as { message: string }
    if (message) router.push('/')
  }

  return ReactDOM.createPortal(
    <S.Container data-testid='popup'>
      <form>
        <h2> Are you sure? </h2>
        <S.ButtonGroup>
          <button data-testid='cancel-popup' onClick={cancel} type='button'>
            Cancel
          </button>
          <button onClick={deleteHandler} id='delete' type='button'>
            Confirm
          </button>
        </S.ButtonGroup>
      </form>
    </S.Container>,
    document.body
  )
}
