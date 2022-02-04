import React, { ReactNode, useState } from 'react'
import { Sidebar } from '../Sidebar'
import { Form } from '../Form'
import * as S from './Layout.styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <S.RootContainer>
        <div className='left'>
          <Sidebar />
          {showForm && <Form setShowForm={setShowForm} />}
        </div>
        <div className='right'>{children}</div>
      </S.RootContainer>
    </div>
  )
}
