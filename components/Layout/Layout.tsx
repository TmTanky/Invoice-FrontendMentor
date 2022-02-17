import React, { ReactNode, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
        {/* <div className='left'> */}
        <div className='first-section'>
          <Sidebar />
        </div>
        {showForm && (
          <AnimatePresence>
            <Form setShowForm={setShowForm} />
          </AnimatePresence>
        )}
        {/* {showForm && <Form setShowForm={setShowForm} />} */}
        {/* </div> */}
        <div className='second-section'>{children}</div>
      </S.RootContainer>
    </div>
  )
}
